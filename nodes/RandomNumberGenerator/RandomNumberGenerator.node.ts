import {
	ApplicationError,
	IExecuteFunctions,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

const isNumberValue = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);


export class RandomNumberGenerator implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gerador de Números Aleatórios',
		name: 'randomNumberGenerator',
		icon: { light: 'file:random-dark.svg', dark: 'file:random-light.svg' },
		group: ['transform'],
		version: 1,
		description: 'Gera números aleatórios dentro de um intervalo especificado',
		defaults: {
			name: 'Gerador de Números Aleatórios',
		},
		inputs: ['main'],
		outputs: ['main'],
        usableAsTool: true,
		properties: [
			{
				displayName: 'Mínimo',
				name: 'min',
				type: 'number',
				default: 1,
				description: 'Valor mínimo do intervalo (inclusivo)',
			},
			{
				displayName: 'Máximo',
				name: 'max',
				type: 'number',
				default: 100,
				description: 'Valor máximo do intervalo (inclusivo)',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			const min = this.getNodeParameter('min', itemIndex) as number;
			const max = this.getNodeParameter('max', itemIndex) as number;

			if (min >= max) {
				throw new ApplicationError('O valor mínimo deve ser menor que o valor máximo.');
			}

			if (!isNumberValue(min) || !isNumberValue(max)) {
				throw new ApplicationError('Os valores de "Mínimo" e "Máximo" devem ser números válidos.');
			}

			const options: IHttpRequestOptions = {
				method: 'GET',
				url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
				headers: {
					'Content-Type': 'application/json',
				},
				json: true,
			};

			const res = await this.helpers.httpRequest(options);

			// if (!res.ok) {
			// 	throw new ApplicationError(
			// 		`Erro ao obter número aleatório: ${res.status}\n${res.statusText}`,
			// 	);
			// }

			const randomNumber = parseInt(res, 10);

			if (isNaN(randomNumber)) {
				throw new ApplicationError('Resposta inválida da API de números aleatórios.');
			}

			const newItem = {
				json: {
					randomNumber,
				},
			};

			returnData.push(newItem);
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
