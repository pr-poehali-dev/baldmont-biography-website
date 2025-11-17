import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const timelineEvents = [
    { year: '1867', event: 'Рождение в деревне Гумнищи Владимирской губернии' },
    { year: '1876', event: 'Поступление в гимназию города Шуя' },
    { year: '1890', event: 'Публикация первого сборника «Сборник стихотворений»' },
    { year: '1894', event: 'Выход знаменитого сборника «Под северным небом»' },
    { year: '1900', event: 'Издание сборника «Горящие здания» — вершина раннего творчества' },
    { year: '1920', event: 'Эмиграция из России во Францию' },
    { year: '1942', event: 'Смерть в Париже в нищете и забвении' }
  ];

  const poems = [
    {
      title: 'Я мечтою ловил уходящие тени...',
      year: '1894',
      text: `Я мечтою ловил уходящие тени,
Уходящие тени погасавшего дня,
Я на башню всходил, и дрожали ступени,
И дрожали ступени под ногой у меня.

И чем выше я шёл, тем ясней рисовалисъ,
Тем ясней рисовались очертания вдали,
И какие-то звуки вокруг раздавались,
Вкруг меня раздавались от Небес и Земли.`
    },
    {
      title: 'Я не знаю мудрости...',
      year: '1902',
      text: `Я не знаю мудрости, годной для других,
Только мимолётности я влагаю в стих.
В каждой мимолётности вижу я миры,
Полные изменчивой радужной игры.`
    },
    {
      title: 'Камыши',
      year: '1895',
      text: `Полночной порою в болотной глуши
Чуть слышно, бесшумно, шуршат камыши.

О чём они шепчут? О чём говорят?
Зачем огоньки между нами горят?`
    }
  ];

  const quotes = [
    { text: 'Я не знаю мудрости, годной для других, только мимолётности я влагаю в стих', source: 'Из стихотворения «Я не знаю мудрости»' },
    { text: 'Будем как солнце! Забудем о том, кто страдал и кого он наказывал зло', source: 'Сборник «Будем как солнце»' },
    { text: 'Я в этот мир пришёл, чтоб видеть солнце', source: 'Из раннего творчества' },
    { text: 'Я — изысканность русской медлительной речи', source: 'Автохарактеристика поэта' }
  ];

  const research = [
    {
      title: 'Символизм в поэзии Бальмонта',
      author: 'Литературный анализ',
      description: 'Исследование символистских образов и мотивов в творчестве поэта Серебряного века'
    },
    {
      title: 'Бальмонт и русская эмиграция',
      author: 'Историческое исследование',
      description: 'Парижский период жизни поэта и его влияние на творчество'
    },
    {
      title: 'Музыкальность стиха Бальмонта',
      author: 'Филологический анализ',
      description: 'Ритмика, звукопись и мелодика в поэтических произведениях'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-serif">Константин Бальмонт</h1>
            <div className="flex gap-8">
              {['Биография', 'Произведения', 'Цитаты', 'Исследования'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const id = item.toLowerCase();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-serif font-light leading-tight">
                Поэт<br />Серебряного<br />века
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Константин Дмитриевич Бальмонт — один из ярчайших представителей русского символизма, 
                чьё творчество стало воплощением музыкальности и изысканности слова
              </p>
              <div className="flex gap-4">
                <Button onClick={() => document.getElementById('биография')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('произведения')?.scrollIntoView({ behavior: 'smooth' })}>
                  Читать стихи
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/bdb9e9ae-aa65-4810-b3b4-db3081edacf2/files/67bad606-e0d4-419f-afda-48c0f2f59017.jpg"
                alt="Константин Бальмонт"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="биография" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light mb-4">Биография</h2>
            <p className="text-muted-foreground">Жизненный путь поэта</p>
          </div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-8 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-24">
                  <span className="text-3xl font-serif font-bold text-accent">{event.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <div className="h-px w-12 bg-accent mb-4 group-hover:w-20 transition-all duration-300"></div>
                  <p className="text-lg leading-relaxed">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="произведения" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light mb-4">Произведения</h2>
            <p className="text-muted-foreground">Избранные стихотворения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-accent transition-colors">
                      {poem.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{poem.year}</span>
                  </div>
                  <Separator />
                  <p className="text-sm leading-relaxed whitespace-pre-line font-serif italic">
                    {poem.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цитаты" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light mb-4">Цитаты</h2>
            <p className="text-muted-foreground">Мысли и афоризмы поэта</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <Icon name="Quote" size={32} className="text-accent opacity-50" />
                  <p className="text-xl font-serif italic leading-relaxed">
                    {quote.text}
                  </p>
                  <p className="text-sm text-muted-foreground">— {quote.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="исследования" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light mb-4">Исследования</h2>
            <p className="text-muted-foreground">Научные работы о творчестве Бальмонта</p>
          </div>

          <div className="space-y-6">
            {research.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:translate-x-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name="BookOpen" size={24} className="text-accent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-serif font-semibold">{item.title}</h3>
                      <p className="text-sm text-accent">{item.author}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Образовательный проект о Константине Бальмонте
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                О проекте
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Источники
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;