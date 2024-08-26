"use client"
import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"
import Logo from "@/lib/media/logo.svg";
import Image from "next/image";
import {sendSingleMessage} from "ssms"

// Modelos de exemplo para demonstração (numa aplicação real, buscar do servidor ou gestão de estado)
const modelosExemplo = [
  { id: 1, nome: "Mensagem de Boas-Vindas", conteudo: "Olá {nome}, bem-vindo ao nosso serviço!" },
  { id: 2, nome: "Atualização Semanal", conteudo: "Oi {nome}, aqui está a sua atualização semanal!" },
  { id: 3, nome: "Lembrete", conteudo: "Não te esqueças da nossa reunião em {data}." }
];

export default function Component() {
  const [modelos] = useState(modelosExemplo);
  const [modeloSelecionadoId, setModeloSelecionadoId] = useState("");
  const [conteudoMensagem, setConteudoMensagem] = useState("");
  const [agendar, setAgendar] = useState("");
  const [recorrente, setRecorrente] = useState(false);

  const handleSelectTemplate = (id) => {
    const modelo = modelos.find(t => t.id === id);
    setModeloSelecionadoId(id);
    setConteudoMensagem(modelo ? modelo.conteudo : "");
  };

  const handleSendNow = async () => {


    try {
      const response  = await  sendSingleMessage("5476b38fff208e0f77c358fad84078b179670ecf","846805329","Bom dia conteudo")
      
    } catch (error) {
      
    }


  };

  const handleScheduleMessage = () => {
    alert('Mensagem agendada!');
  };

  return (
    <div className="flex flex-col h-full">
    <header className="flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm">
      <Link href={"/"} className="flex items-center gap-2" prefetch={false}>  
          <Image src={Logo} alt="Logo" width={30} height={30} className="mr-2" />
        <span className="text-lg font-semibold">VAESMS</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Contactos
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Modelos
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Difusão
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Relatórios
        </Link>
        
      </nav>
    </header>
      <div className="flex flex-1 gap-6 p-6">
        <div className="flex-1 space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="outline" className="w-full justify-between">
                <span>{modeloSelecionadoId ? modelos.find(modelo => modelo.id === modeloSelecionadoId)?.nome : "Selecionar Modelo"}</span>
                <div className="h-4 w-4" />
              </Button> */}
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
            className="h-[300px] w-full resize-none"
            value={conteudoMensagem}
            onChange={(e) => setConteudoMensagem(e.target.value)}
          />
        </div>
        <div className="space-y-4 w-[300px]">
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
              />
              <Button className="w-full" onClick={handleScheduleMessage}>Agendar</Button>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
