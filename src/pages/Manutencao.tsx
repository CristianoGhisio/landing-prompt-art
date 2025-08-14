import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, ArrowLeft, CheckCircle, Clock, Shield, Users, Star, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import repairImage from "@/assets/repair-service.webp";

const Manutencao = () => {
  const services = [
    {
      title: "Limpeza Completa",
      description: "Limpeza interna profunda com remoção de poeira e troca de pasta térmica",
      price: "R$ 80,00",
      duration: "2-3 dias",
      warranty: "90 dias",
      popular: true,
      includes: ["Desmontagem completa", "Limpeza com ar comprimido", "Troca pasta térmica", "Teste de funcionamento"]
    },
    {
      title: "Reparo de Controle",
      description: "Conserto de analógicos, botões, triggers e problemas de conexão",
      price: "R$ 120,00",
      duration: "1-2 dias",
      warranty: "60 dias",
      popular: true,
      includes: ["Diagnóstico gratuito", "Troca de peças defeituosas", "Calibração", "Teste completo"]
    },
    {
      title: "Troca de HD/SSD",
      description: "Upgrade ou substituição de armazenamento com backup de dados",
      price: "R$ 150,00",
      duration: "1 dia",
      warranty: "30 dias",
      popular: false,
      includes: ["Backup de dados", "Instalação do novo HD/SSD", "Restauração do sistema", "Teste de velocidade"]
    },
    {
      title: "Reparo de HDMI",
      description: "Solda e substituição de porta HDMI danificada",
      price: "R$ 200,00",
      duration: "3-5 dias",
      warranty: "90 dias",
      popular: false,
      includes: ["Micro soldas", "Porta HDMI original", "Teste de vídeo/áudio", "Garantia estendida"]
    },
    {
      title: "Desbloqueio/Destravamento",
      description: "Desbloqueio seguro para homebrew e backups",
      price: "R$ 250,00",
      duration: "1 dia",
      warranty: "30 dias",
      popular: false,
      includes: ["Desbloqueio profissional", "Instalação de CFW", "Tutorial completo", "Suporte pós-serviço"]
    },
    {
      title: "Diagnóstico Completo",
      description: "Análise detalhada de problemas e orçamento sem compromisso",
      price: "GRÁTIS",
      duration: "Imediato",
      warranty: "-",
      popular: true,
      includes: ["Teste completo", "Relatório detalhado", "Orçamento preciso", "Sem compromisso"]
    }
  ];

  const commonProblems = [
    {
      problem: "Console superaquecendo",
      cause: "Poeira acumulada no sistema de ventilação",
      solution: "Limpeza completa + troca de pasta térmica"
    },
    {
      problem: "Controle com drift no analógico",
      cause: "Desgaste natural ou sujeira nos potenciômetros",
      solution: "Substituição dos analógicos defeituosos"
    },
    {
      problem: "Console não liga",
      cause: "Fonte de alimentação ou placa-mãe danificada",
      solution: "Diagnóstico + reparo eletrônico especializado"
    },
    {
      problem: "Sem sinal de vídeo",
      cause: "Porta HDMI danificada ou GPU com problema",
      solution: "Reparo/substituição da porta HDMI"
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      text: "Meu PS4 estava com muito barulho. Fizeram a limpeza e agora está silencioso como novo!",
      rating: 5,
      service: "Limpeza Completa"
    },
    {
      name: "Ana S.",
      text: "Controle com drift terrível. Consertaram em 1 dia e ainda deram garantia. Recomendo!",
      rating: 5,
      service: "Reparo de Controle"
    },
    {
      name: "João P.",
      text: "Achei que meu Xbox tinha morrido. Eles diagnosticaram e consertaram rapidinho. Nota 10!",
      rating: 5,
      service: "Diagnóstico"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${repairImage})` }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Wrench className="w-12 h-12 text-accent animate-glow-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold glow-text">
                Manutenção <span className="gradient-neon bg-clip-text text-transparent">Especializada</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Técnicos certificados, peças originais e garantia estendida para seu console
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Users className="w-5 h-5 text-accent" />
                <span>Técnicos Certificados</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Garantia Estendida</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-accent-glow" />
                <span>Peças Originais</span>
              </div>
            </div>

            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              <Settings className="w-5 h-5 mr-2" />
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Nossos <span className="gradient-neon bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas para todos os tipos de problemas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-neon transition-gaming group neon-border bg-card/80 backdrop-blur-sm relative"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground z-10">
                    🔥 Popular
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      {service.warranty !== "-" && (
                        <div className="flex items-center gap-1 mt-1">
                          <Shield className="w-4 h-4" />
                          {service.warranty}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:shadow-accent">
                    Solicitar Serviço
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Problemas <span className="gradient-neon bg-clip-text text-transparent">Comuns</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Identificamos e resolvemos os principais problemas de consoles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonProblems.map((item, index) => (
              <Card key={index} className="neon-border bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">🔧 {item.problem}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-semibold text-muted-foreground">Causa comum:</span>
                    <p className="text-sm">{item.cause}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent">Nossa solução:</span>
                    <p className="text-sm">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              O que nossos <span className="gradient-neon bg-clip-text text-transparent">Clientes</span> dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card neon-border bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{testimonial.service}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-gaming opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Seu console precisa de cuidados?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e receba um orçamento sem compromisso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              Agendar Diagnóstico
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-4">
              WhatsApp: (55) 99999-9999
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manutencao;