import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, ShoppingBag, Star, ArrowLeft, Trophy, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import storeImage from "@/assets/store-showcase.webp";

const NovosUsados = () => {
  const consoles = [
    {
      name: "PlayStation 5",
      condition: "Novo",
      price: "R$ 3.999,00",
      originalPrice: "R$ 4.299,00",
      discount: "7% OFF",
      features: ["SSD Ultra-High Speed", "Ray Tracing", "3D Audio", "DualSense"],
      inStock: true,
      popular: true
    },
    {
      name: "Xbox Series X",
      condition: "Novo",
      price: "R$ 3.799,00",
      originalPrice: "R$ 4.199,00",
      discount: "10% OFF",
      features: ["4K Gaming", "120 FPS", "Quick Resume", "Game Pass"],
      inStock: true,
      popular: false
    },
    {
      name: "Nintendo Switch OLED",
      condition: "Novo",
      price: "R$ 2.299,00",
      originalPrice: "R$ 2.499,00",
      discount: "8% OFF",
      features: ["Tela OLED 7''", "Portátil", "64GB", "Joy-Con"],
      inStock: true,
      popular: true
    },
    {
      name: "PlayStation 4 Slim",
      condition: "Usado - Excelente",
      price: "R$ 1.599,00",
      originalPrice: "R$ 1.899,00",
      discount: "16% OFF",
      features: ["1TB Storage", "HDR Gaming", "Testado", "6 meses garantia"],
      inStock: true,
      popular: false
    },
    {
      name: "Xbox One X",
      condition: "Usado - Muito Bom",
      price: "R$ 1.399,00",
      originalPrice: "R$ 1.699,00",
      discount: "18% OFF",
      features: ["4K Gaming", "1TB", "Revisado", "3 meses garantia"],
      inStock: false,
      popular: false
    },
    {
      name: "Nintendo Switch Lite",
      condition: "Usado - Excelente",
      price: "R$ 999,00",
      originalPrice: "R$ 1.299,00",
      discount: "23% OFF",
      features: ["Portátil", "32GB", "Testado", "6 meses garantia"],
      inStock: true,
      popular: false
    }
  ];

  const accessories = [
    { name: "DualSense PS5", price: "R$ 299,00", condition: "Novo" },
    { name: "Controle Xbox Series", price: "R$ 279,00", condition: "Novo" },
    { name: "Pro Controller Switch", price: "R$ 349,00", condition: "Novo" },
    { name: "Headset Gaming", price: "R$ 199,00", condition: "Usado" }
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
          style={{ backgroundImage: `url(${storeImage})` }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <ShoppingBag className="w-12 h-12 text-primary animate-glow-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold glow-text">
                Novos & <span className="gradient-neon bg-clip-text text-transparent">Usados</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Os melhores consoles e acessórios com garantia e preços imbatíveis
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-accent" />
                <span>Garantia Estendida</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Melhor Preço</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-accent-glow" />
                <span>Testado & Aprovado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Nosso <span className="gradient-neon bg-clip-text text-transparent">Catálogo</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Consoles e acessórios para todos os gostos e orçamentos
            </p>
          </div>

          {/* Consoles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Consoles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consoles.map((console, index) => (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-neon transition-gaming group neon-border bg-card/80 backdrop-blur-sm relative"
                >
                  {console.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground z-10">
                      🔥 Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={console.condition === "Novo" ? "default" : "secondary"}>
                        {console.condition}
                      </Badge>
                      {console.discount && (
                        <Badge variant="destructive">{console.discount}</Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl">{console.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-accent">{console.price}</span>
                        {console.originalPrice && (
                          <span className="text-sm line-through text-muted-foreground">
                            {console.originalPrice}
                          </span>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {console.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={console.inStock ? "gaming" : "secondary"}
                      className="w-full"
                      disabled={!console.inStock}
                    >
                      {console.inStock ? "Comprar Agora" : "Fora de Estoque"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Acessórios</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessories.map((accessory, index) => (
                <Card key={index} className="shadow-card hover:shadow-accent transition-gaming neon-border bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{accessory.name}</CardTitle>
                    <Badge variant={accessory.condition === "Novo" ? "default" : "secondary"} className="w-fit">
                      {accessory.condition}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-accent mb-4">{accessory.price}</div>
                    <Button variant="outline" className="w-full">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-gaming opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Trabalhamos sob encomenda e temos acesso a produtos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              WhatsApp: (55) 99999-9999
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-4">
              Visitar Loja Física
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovosUsados;