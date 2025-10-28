import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Goal {
  id: number;
  title: string;
  progress: number;
  date: string;
  isKey?: boolean;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<'goals' | 'stats'>('goals');
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: 'Посрать', progress: 49, date: '31.03', isKey: true },
    { id: 2, title: 'Посрать', progress: 49, date: '31.03' },
    { id: 3, title: 'Посрать', progress: 49, date: '31.03' },
    { id: 4, title: 'Посрать', progress: 49, date: '31.03' },
  ]);

  const totalGoals = 12;
  const completedGoals = 9;
  const overallProgress = 52;

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-40 bg-primary flex flex-col items-center py-8 gap-8">
        <Avatar className="w-24 h-24 border-4 border-white">
          <AvatarImage src="https://cdn.poehali.dev/files/f5759876-4438-4512-8631-2f6abb4041a7.jpg" />
          <AvatarFallback>ВК</AvatarFallback>
        </Avatar>
        
        <div className="text-white text-center px-4">
          <p className="text-sm font-semibold">Виталик</p>
          <p className="text-sm">Крутой</p>
          <p className="text-sm">Front-dev</p>
        </div>

        <div className="mt-auto">
          <h1 className="text-white text-3xl font-bold tracking-wider">WINK</h1>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-8">
            <Button
              variant={activeTab === 'goals' ? 'default' : 'secondary'}
              onClick={() => setActiveTab('goals')}
              className="rounded-full px-8 py-6 text-lg font-medium"
            >
              Цели
            </Button>
            <Button
              variant={activeTab === 'stats' ? 'default' : 'secondary'}
              onClick={() => setActiveTab('stats')}
              className="rounded-full px-8 py-6 text-lg font-medium bg-transparent text-foreground border-0 hover:bg-secondary"
            >
              Статистика
            </Button>
          </div>

          {activeTab === 'goals' && (
            <>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-8">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - overallProgress / 100)}`}
                        className="text-primary transition-all duration-500"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{overallProgress}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-primary text-lg font-medium mb-2">Прогресс по целям</p>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block font-semibold">
                      {overallProgress}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - completedGoals / totalGoals)}`}
                        className="text-primary transition-all duration-500"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary text-lg font-medium mb-2">Выполнено ключевых целей</p>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block font-semibold">
                      {completedGoals} из {totalGoals}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                {goals.map((goal) => (
                  <Card
                    key={goal.id}
                    className="p-6 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in relative"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {goal.isKey && (
                          <Icon name="Star" size={20} className="text-primary fill-primary" />
                        )}
                        <h3 className="text-lg font-semibold text-card-foreground">{goal.title}</h3>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-card-foreground">
                        <Icon name="MessageSquare" size={20} />
                      </Button>
                    </div>

                    <Progress value={goal.progress} className="h-3 mb-4" />

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        <span>{goal.date}</span>
                      </div>
                      <span className="font-semibold text-card-foreground">{goal.progress} %</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-4 right-4 text-muted-foreground hover:text-card-foreground"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                  </Card>
                ))}
              </div>

              <Card className="p-12 bg-card hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group">
                <Icon
                  name="Plus"
                  size={48}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </Card>
            </>
          )}

          {activeTab === 'stats' && (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl text-muted-foreground">Статистика в разработке</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
