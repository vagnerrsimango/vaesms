"use client"
import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { sendSingleMessage } from "ssms";

const modelosExemplo = [
  { id: 1, nome: "Mensagem de Boas-Vindas", conteudo: "Olá {nome}, bem-vindo ao nosso serviço!" },
  { id: 2, nome: "Atualização Semanal", conteudo: "Oi {nome}, aqui está a sua atualização semanal!" },
  { id: 3, nome: "Lembrete", conteudo: "Não te esqueças da nossa reunião em {data}." }
];

const contactsTrial = [
  { id: 1, nome: "Vagner Caetano", numero: "+258846805329" },
  { id: 2, nome: "Vagner Simango Movitel", numero: "+258861786028" },
  { id: 3, nome: "Elton Vilanculo", numero: "+258845204801" },
  { id: 3, nome: "Afonso Muchanga", numero: "+258877585888" }
];

export default function Component() {
  const [modelos] = useState(modelosExemplo);
  const [modeloSelecionadoId, setModeloSelecionadoId] = useState("");
  const [conteudoMensagem, setConteudoMensagem] = useState("");
  const [agendar, setAgendar] = useState("");
  const [recorrente, setRecorrente] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(contactsTrial[0].numero);

  const handleSelectTemplate = (id) => {
    const modelo = modelos.find(t => t.id === id);
    setModeloSelecionadoId(id);
    setConteudoMensagem(modelo ? modelo.conteudo : "");
  };

  const handleSendNow = async () => {
    try {
      const response = await sendSingleMessage("5476b38fff208e0f77c358fad84078b179670ecf", phoneNumber, conteudoMensagem);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScheduleMessage = () => {
    alert('Mensagem agendada!');
  };

  return (
    <div className="flex flex-col h-full p-6 space-y-6 bg-gray-50">
      <div className="flex flex-1 gap-6">
        <div className="flex-1 space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>{modeloSelecionadoId ? modelos.find(modelo => modelo.id === modeloSelecionadoId)?.nome : "Selecionar Modelo"}</span>
                <div className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Modelos de Mensagem</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {modelos.map(modelo => (
                <DropdownMenuItem key={modelo.id} onClick={() => handleSelectTemplate(modelo.id)}>
                  {modelo.nome}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Textarea
            placeholder="Componha sua mensagem aqui..."
            className="h-[300px] w-full resize-none border-gray-300 rounded-md"
            value={conteudoMensagem}
            onChange={(e) => setConteudoMensagem(e.target.value)}
          />
        </div>
        <div className="space-y-6 w-[300px]">
          <Card>
            <CardHeader>
              <CardTitle>Selecionar Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    {contactsTrial.find(contact => contact.numero === phoneNumber)?.nome || "Selecionar Contato"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Contatos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {contactsTrial.map(contact => (
                    <DropdownMenuItem key={contact.id} onClick={() => setPhoneNumber(contact.numero)}>
                      {contact.nome}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enviar Agora</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/analytics">
                <Button className="w-full" onClick={handleSendNow}>Enviar Mensagem</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agendar Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="datetime-local"
                placeholder="Selecionar data e hora"
                value={agendar}
                onChange={(e) => setAgendar(e.target.value)}
                className="border-gray-300 rounded-md"
              />
              <Button className="w-full" onClick={handleScheduleMessage}>Agendar</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
