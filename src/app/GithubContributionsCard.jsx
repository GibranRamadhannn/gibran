"use client";

import { useEffect, useState } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { SiGithub } from "react-icons/si";

export default function GithubContributionsCard() {
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch("/api/github-contributions");
        const data = await res.json();
        if (!data.error) {
          setWeeks(data.weeks);
          setTotal(data.totalContributions);
        }
      } catch {
      } finally {
        setLoading(false);
      }
    };
    fetchContributions();
  }, []);

  const getColor = (count, maxCount = 20) => {
    if (count === 0) return "rgb(50, 50, 50)";
    const opacity = Math.min(1, count / maxCount);
    return `rgba(207, 15, 71, ${0.3 + 0.7 * opacity})`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <SpotlightCard
      className="custom-spotlight-card flex flex-col items-start justify-center p-4"
      spotlightColor="rgba(207, 15, 71, 0.4)"
    >
      <div className="flex items-center justify-between w-full mb-3">
        <div className="bg-folly/20 border border-folly rounded-full px-4 py-1 flex items-center justify-center gap-2">
          <SiGithub className="w-4.5 h-auto" />
          <h3 className="text-md font-bold">GitHub Contributions</h3>
        </div>
        {hoverInfo && (
          <div className="ml-2 text-sm font-mono text-spanish-grey">
            {hoverInfo.count} commits — {formatDate(hoverInfo.date)}
          </div>
        )}
      </div>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-sm text-spanish-grey font-semibold font-mono">
            Loading...
          </p>
        </div>
      ) : (
        <>
          <div className="w-full h-full">
            <div
              className="grid gap-1 py-4"
              style={{
                gridTemplateRows: "repeat(7, 1fr)",
                gridAutoFlow: "column",
              }}
            >
              {weeks.flatMap((week, i) =>
                week.contributionDays.map((day, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="w-5 h-5 rounded-sm transition-all duration-200 hover:scale-110"
                    onMouseEnter={() =>
                      setHoverInfo({
                        count: day.contributionCount,
                        date: day.date,
                      })
                    }
                    onMouseLeave={() => setHoverInfo(null)}
                    style={{
                      backgroundColor: getColor(day.contributionCount),
                    }}
                  />
                ))
              )}
            </div>
          </div>
          <p className="text-xs font-mono text-spanish-grey mt-3">
            Total {total} commits (last 5 months)
          </p>
        </>
      )}
    </SpotlightCard>
  );
}
