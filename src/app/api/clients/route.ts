import { Client } from "./interfaces";

const clients: Client[] = [
    {
        name: 'Zé Carlos',
        address: 'Rua do Zé Carlos'
    },
    {
        name: 'Oswaldo',
        address: 'Rua do Oswaldo'
    },
    {
        name: 'Liedson',
        address: 'Rua do Liedson'
    }
];

export function GET() {
    return Response.json(clients);
};

/*export function POST() {
    const form = new FormData
    const name = form.get('name')

    clients.push({
        name: 'Pedro Oliveira',
        address: 'Rua do Pedro Oliveira'
    });

    Response.json({
        status: 'Added',
    });
}; */


export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;

    clients.push({
        name,
        address,
    });

    return Response.json({ status: 'Added' });
};