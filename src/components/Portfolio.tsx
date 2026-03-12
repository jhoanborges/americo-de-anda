import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Globe,
  Briefcase,
  GraduationCap,
  Languages,
  Users,
  Sparkles,
  ChevronRight,
  Factory,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_oklch(0.97_0.01_75)_0%,_oklch(0.985_0.002_75)_50%,_oklch(0.96_0.015_55)_100%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.75_0.16_55)] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[oklch(0.25_0.04_50)] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Card className="overflow-hidden border-0 shadow-xl shadow-black/5 bg-card/80 backdrop-blur-sm">
            <div className="relative">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[oklch(0.75_0.16_55)] via-[oklch(0.65_0.14_50)] to-[oklch(0.25_0.04_50)]" />

              <CardContent className="p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
                  {/* Photo */}
                  <div className="relative shrink-0">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-[oklch(0.75_0.16_55)]/20 shadow-lg">
                      <img
                        src="/rico2.png"
                        alt="Americo De Anda"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[oklch(0.75_0.16_55)] flex items-center justify-center shadow-md">
                      <Factory className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left flex-1">
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-tight">
                      AMERICO<br />DE ANDA
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                      Operador General | Linea de Produccion | Almacen e Inventario | Control de Calidad
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4 justify-center sm:justify-start">
                      {["PEPS", "5S", "ISO 9001", "Manejo de Materiales"].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-semibold bg-[oklch(0.75_0.16_55)]/10 text-[oklch(0.45_0.12_50)] border-[oklch(0.75_0.16_55)]/20 hover:bg-[oklch(0.75_0.16_55)]/15 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 text-sm">
                      <ContactItem icon={<MapPin className="w-4 h-4" />} text="Col. Canada Blanca, Apodaca, Mexico" />
                      <ContactItem icon={<Phone className="w-4 h-4" />} text="(+52) 81 2971 0131" />
                      <ContactItem icon={<Mail className="w-4 h-4" />} text="americoanda29@gmail.com" href="mailto:americoanda29@gmail.com" />
                      <ContactItem icon={<Linkedin className="w-4 h-4" />} text="LinkedIn" href="https://linkedin.com" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </header>

        {/* Experience */}
        <Section
          icon={<Briefcase className="w-5 h-5" />}
          title="Experiencia Laboral"
          delay="delay-100"
        >
          <div className="space-y-6">
            <ExperienceCard
              company="The LEGO Group"
              role="Operador General de Produccion"
              period="Octubre 2025 - Febrero 2026"
              location="Cienega de Flores"
              items={[
                "Recoleccion y suministro de piezas y materiales a las lineas de produccion, asegurando el flujo continuo de operaciones.",
                "Operacion de lineas transportadoras y mesas manuales, garantizando los estandares de calidad y productividad por hora.",
                "Acomodo, organizacion y almacenamiento de materiales siguiendo procedimientos de 5S y normativas de seguridad.",
                "Gestion de inventario bajo el metodo PEPS (Primeras Entradas, Primeras Salidas), asegurando la rotacion correcta.",
                "Manejo de sistemas de inventario para el registro y control de entradas y salidas de materiales.",
                "Cumplimiento de metas de produccion en un entorno de alto volumen y ritmo acelerado.",
              ]}
            />
            <ExperienceCard
              company="Importadora Activa S.A. de C.V."
              role="Operador de Produccion"
              period="Junio 2022 - Julio 2025"
              location="Monterrey, Nuevo Leon"
              items={[
                "Organizacion diaria de suministros e insumos del turno anterior para garantizar la continuidad del proceso productivo.",
                "Preparacion de colorantes para reposteria desde cero, siguiendo formulas y proporciones establecidas.",
                "Carga y operacion de maquinas dispensadoras de colorante, incluyendo calibracion y mantenimiento basico.",
                "Etiquetado de productos terminados conforme a estandares de identificacion y trazabilidad.",
                "Empaque y acomodo de producto en cajas para su distribucion y envio a bodega.",
                "Coordinacion del flujo de producto terminado hacia bodega para su distribucion y venta.",
              ]}
            />
          </div>
        </Section>

        {/* Education */}
        <Section
          icon={<GraduationCap className="w-5 h-5" />}
          title="Educacion"
          delay="delay-200"
        >
          <div className="grid gap-3">
            <EducationItem
              school='Escuela General "Ignacio Zaragoza"'
              period="2008 - 2014"
              degree="Primaria Completa"
            />
            <EducationItem
              school='Escuela Secundaria N.5 "Josefa Ortiz de Dominguez"'
              period="2014 - 2017"
              degree="Secundaria Completa"
            />
          </div>
        </Section>

        {/* Skills */}
        <Section
          icon={<Sparkles className="w-5 h-5" />}
          title="Habilidades"
          delay="delay-300"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Lectura comprensiva de manuales e instructivos operativos",
              "Seguimiento estricto de normas y protocolos de seguridad",
              "Comunicacion escrita clara y con buena ortografia",
              "Capacidad de trabajo fisico sostenido en ritmo acelerado",
              "Organizacion y sentido espacial para acomodo de materiales",
              "Cultura de orden y limpieza sostenida (metodologia 5S)",
              "Orientacion a la calidad en cada paso del proceso (ISO 9001)",
              "Cumplimiento de normativas internacionales de seguridad",
            ].map((skill) => (
              <div key={skill} className="flex items-start gap-2.5 text-sm text-muted-foreground group">
                <ChevronRight className="w-4 h-4 mt-0.5 text-[oklch(0.75_0.16_55)] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Languages & References side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Section
            icon={<Languages className="w-5 h-5" />}
            title="Idiomas"
            delay="delay-400"
            className="mb-0"
          >
            <div className="space-y-3">
              <LanguageItem language="Espanol" level="Nativo" percentage={100} />
              <LanguageItem language="Ingles" level="Basico" percentage={25} />
            </div>
          </Section>

          <Section
            icon={<Users className="w-5 h-5" />}
            title="Referencias"
            delay="delay-500"
            className="mb-0"
          >
            <div className="text-sm space-y-1">
              <p className="font-bold text-foreground">Jhoan Borges Henriche</p>
              <p className="text-muted-foreground">CEO de Hexagun.mx</p>
              <p className="text-muted-foreground text-xs">Ingeniero de Sistemas. M.S.c Ciencias Computacionales y Telecomunicaciones</p>
              <p className="text-[oklch(0.75_0.16_55)] font-semibold mt-2">(+52) 81 1616 8792</p>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-xs text-muted-foreground/60">
          <Separator className="mb-6 opacity-50" />
          Americo De Anda &middot; Portafolio Profesional &middot; 2026
        </footer>
      </div>
    </div>
  );
}

/* Sub-components */

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const content = (
    <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
      <span className="text-[oklch(0.75_0.16_55)]">{icon}</span>
      <span className="truncate">{text}</span>
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <div>{content}</div>;
}

function Section({ icon, title, children, delay = "", className = "" }: {
  icon: React.ReactNode; title: string; children: React.ReactNode; delay?: string; className?: string;
}) {
  return (
    <section className={`mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ${delay} ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-[oklch(0.75_0.16_55)]/10 flex items-center justify-center text-[oklch(0.55_0.14_50)]">
          {icon}
        </div>
        <h2 className="text-xl font-black tracking-tight text-foreground uppercase">{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

function ExperienceCard({ company, role, period, location, items }: {
  company: string; role: string; period: string; location: string; items: string[];
}) {
  return (
    <Card className="border-0 shadow-md shadow-black/3 bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <CardTitle className="text-lg font-black tracking-tight">{company}</CardTitle>
            <p className="text-sm text-[oklch(0.55_0.14_50)] font-semibold">{role}</p>
          </div>
          <div className="text-xs text-muted-foreground sm:text-right shrink-0">
            <p className="font-semibold">{period}</p>
            <p>{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.16_55)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function EducationItem({ school, period, degree }: { school: string; period: string; degree: string }) {
  return (
    <div className="flex items-center gap-4 p-3.5 rounded-xl bg-card/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.16_55)]/10 flex items-center justify-center shrink-0">
        <GraduationCap className="w-5 h-5 text-[oklch(0.55_0.14_50)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-foreground truncate">{school}</p>
        <p className="text-xs text-muted-foreground">{degree} &middot; {period}</p>
      </div>
    </div>
  );
}

function LanguageItem({ language, level, percentage }: { language: string; level: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-bold text-foreground">{language}</span>
        <span className="text-muted-foreground text-xs">{level}</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[oklch(0.75_0.16_55)] to-[oklch(0.55_0.14_50)] transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
