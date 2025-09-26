import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Update immediately
    setTimeLeft(calculateTimeLeft());

    // Set up interval to update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Webinar Starts In:</h3>
        <p className="text-white/80 text-lg">Don't miss out - Limited seats available!</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center space-y-2">
          <div className="text-4xl font-black text-highlight bg-white/10 rounded-2xl py-4 px-2">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 font-medium text-sm">Days</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-black text-highlight bg-white/10 rounded-2xl py-4 px-2">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 font-medium text-sm">Hours</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-black text-highlight bg-white/10 rounded-2xl py-4 px-2">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 font-medium text-sm">Minutes</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-4xl font-black text-highlight bg-white/10 rounded-2xl py-4 px-2">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 font-medium text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;