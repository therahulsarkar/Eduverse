import {pro_note, pro_podium, pro_analysis, pro_test } from '@/assets'

const premiumFeatures  = [
    {
      id: 1,
      name: "Test Series",
      desc: "Premium members get exclusive access to 10 unit tests and 3 full-length tests, providing extensive practice opportunities and allowing for a thorough evaluation of their preparation.",
      imgUrl: pro_test
    },
    {
      id: 2,
      name: "Leaderboard",
      desc: "Leaderboard displays rankings based on your performance compared to other users. Track your progress, compete with peers, and strive for the top positions.",
      imgUrl: pro_podium
    },
    {
      id: 3,
      name: "Notes",
      desc: "Notes provides concise summaries and key points for quick revision. Access well-organized study materials to reinforce your understanding and recall important concepts.",
      imgUrl: pro_note
    },
    {
      id: 4,
      name: "Performance Analysis",
      desc: "Performance Analysis offers in-depth insights into your strengths and weaknesses. Analyze your test results, identify areas for improvement, and tailor your study strategy accordingly.",
      imgUrl: pro_analysis
    }
  ];
  
export default premiumFeatures;
  