import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan 2024", Cypress: 5387694, Playwright: 4004551 },
  { month: "Feb 2024", Cypress: 5641294, Playwright: 4492069 },
  { month: "Mar 2024", Cypress: 5077384, Playwright: 4629823 },
  { month: "Apr 2024", Cypress: 4952815, Playwright: 4628390 },
  { month: "May 2024", Cypress: 5262151, Playwright: 5418408 },
  { month: "Jun 2024", Cypress: 5026289, Playwright: 5709472 },
  { month: "Jul 2024", Cypress: 5217909, Playwright: 6446085 },
  { month: "Aug 2024", Cypress: 5341595, Playwright: 6756287 },
  { month: "Sep 2024", Cypress: 5347643, Playwright: 7909955 },
  { month: "Oct 2024", Cypress: 5522848, Playwright: 10278986 },
];

export function DownloadsChart() {
  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(value);
  };

  return (
    <Card className="bg-slate-800 text-white rounded-lg shadow-md p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Testing Frameworks Downloads Comparison
        </CardTitle>
        <CardDescription className="text-sm text-slate-400">
          Monthly downloads comparison between Cypress and Playwright (2024)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="month" stroke="hsl(0, 0%, 80%)" />
            <YAxis
              tickFormatter={(tick) => formatNumber(tick)}
              stroke="hsl(0, 0%, 80%)"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-slate-700 text-white p-2 rounded-lg shadow-lg">
                      <div>{payload[0].payload.month}</div>
                      <div className="font-bold text-cyan-400">
                        Cypress: {formatNumber(payload[0].value)}
                      </div>
                      <div className="font-bold text-green-400">
                        Playwright: {formatNumber(payload[1].value)}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="Cypress"
              stroke="hsl(var(--chart-1))"
              fill="rgba(34, 193, 195, 0.3)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="Playwright"
              stroke="hsl(var(--chart-2))"
              fill="rgba(38, 194, 129, 0.3)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
