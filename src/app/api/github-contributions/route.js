import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "GibranRamadhannn";
    const token = process.env.GITHUB_TOKEN;

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${new Date(
            new Date().setMonth(new Date().getMonth() - 5)
          ).toISOString()}", to: "${new Date().toISOString()}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    if (!json.data) throw new Error("Failed to fetch GitHub data");

    return NextResponse.json(
      json.data.user.contributionsCollection.contributionCalendar
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
