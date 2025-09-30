import { Link } from 'react-router-dom';
import { PlusCircle, User, Briefcase, CheckCircle, Clock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MOCK_CANDIDATES } from '@/lib/constants';
const statusConfig = {
  'Pending Interview': { icon: Clock, color: 'bg-yellow-500', textColor: 'text-yellow-500' },
  'Interviewing': { icon: PlayCircle, color: 'bg-blue-500', textColor: 'text-blue-500' },
  'Completed': { icon: CheckCircle, color: 'bg-purple-500', textColor: 'text-purple-500' },
  'Hired': { icon: CheckCircle, color: 'bg-green-500', textColor: 'text-green-500' },
};
export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <section className="animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Candidate Dashboard</h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Overview of all candidates in the hiring pipeline.
              </p>
            </div>
            <Button size="lg" className="bg-[#7554A3] hover:bg-[#7554A3]/90">
              <PlusCircle className="mr-2 h-5 w-5" />
              New Interview Process
            </Button>
          </div>
        </section>
        <section className="animate-slide-up animation-delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_CANDIDATES.map((candidate) => {
              const statusInfo = statusConfig[candidate.status];
              return (
                <Card key={candidate.id} className="flex flex-col transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1 border-slate-200 dark:border-slate-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
                      <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-semibold">{candidate.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 pt-1">
                        <Briefcase className="h-4 w-4" />
                        {candidate.position}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2">
                      <statusInfo.icon className={`h-4 w-4 ${statusInfo.textColor}`} />
                      <Badge variant="outline" className={`border-current ${statusInfo.textColor}`}>
                        {candidate.status}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFC107]/90 text-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC107]">
                      <Link to={`/interview/${candidate.id}`}>
                        {candidate.status === 'Pending Interview' ? 'Start Interview' : 'View Details'}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}