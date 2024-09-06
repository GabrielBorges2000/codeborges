import { EmailTemplate } from '@/templates/email'; // ajuste o caminho conforme sua estrutura
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json(); // Desestrutura os dados recebidos no body

    const { data } = await resend.emails.send({
      from: 'contato@codeborges.com.br',
      to: "contato@codeborges.com",
      subject: `Novo Orçamento de ${name}`,
      react: EmailTemplate({ name, email, message }),
      headers: {
        'X-Entity-Ref-ID': randomUUID(),
      },
    })



    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}
