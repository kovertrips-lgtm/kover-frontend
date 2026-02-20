import { Heart, Brain, Zap, Sun } from "lucide-react";

export interface SurfBenefitsProps {
    heading: string;
    benefits?: { icon: string; title: string; description: string }[];
}

const defaultBenefits = [
    { icon: 'heart', title: 'Физическая форма', description: 'Отличная кардиотренировка, укрепляющая все группы мышц.' },
    { icon: 'brain', title: 'Очищение разума', description: 'Океан смывает стресс, оставляя только тебя и волну.' },
    { icon: 'zap', title: 'Энергия', description: 'Невероятный заряд бодрости и эндорфинов на весь день.' },
    { icon: 'sun', title: 'Связь с природой', description: 'Полное погружение в стихию и ощущение свободы.' },
];

const SurfBenefits = ({ heading, benefits = defaultBenefits }: SurfBenefitsProps) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'heart': return <Heart className="w-8 h-8 text-primary" />;
            case 'brain': return <Brain className="w-8 h-8 text-primary" />;
            case 'zap': return <Zap className="w-8 h-8 text-primary" />;
            case 'sun': return <Sun className="w-8 h-8 text-primary" />;
            default: return <Heart className="w-8 h-8 text-primary" />;
        }
    };

    return (
        <section className="py-8 w-full max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            {getIcon(b.icon)}
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
                        <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SurfBenefits;
