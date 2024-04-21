import {
  notes,
  test,
  leaderboard,
  previousyear,
  youtube,
  marksdistribution,
  syllabus,
  ide,
  timer, omrsheet, podcast
} from '@/assets';

const dashboardData = [
  {
    "id": 1,
    "name": "Notes",
    "imgUrl": notes,
    "desc": "Access notes of all the topics",
    "url": "notes",
    "clickable": true,
    "premium": false,
    "comingSoon": false,
    "Bg_from": "#f97316",
    "Bg_to": "#b91c1c",
  },
  {
    "id": 2,
    "name": "Test Series",
    "imgUrl": test,
    "desc": "Enhance your exam readiness",
    "url": "test",
    "clickable": true,
    "premium": true,
    "comingSoon": false,
    "Bg_from": "#0E48DE",
    "Bg_to": "#031641",
  },
  {
    "id": 3,
    "name": "Leaderboard",
    "imgUrl": leaderboard,
    "desc": "Track your progress",
    "url": "leaderboard",
    "clickable": true,
    "premium": true,
    "comingSoon": false,
    "Bg_from": "#f87171",
    "Bg_to": "#7f1d1d",
  },
  

  {
    "id": 5,
    "name": "Syllabus",
    "imgUrl": syllabus,
    "desc": "View & download the syllabus of JECA",
    "url": "syllabus",
    "clickable": true,
    "premium": false,
    "comingSoon": false,
    "Bg_from": "#64748b",
    "Bg_to": "#1e293b",
  },
  {
    "id": 6,
    "name": "Previous Year Questions",
    "imgUrl": previousyear,
    "desc": "Access previous year JECA questions",
    "url": "pyq",
    "clickable": true,
    "premium": false,
    "comingSoon": false,
    "Bg_from": "#009FC2",
    "Bg_to": "#0D0A0B",
  },
  
  
  {
    "id": 9,
    "name": "Pomodoro Timer",
    "imgUrl": timer,
    "desc": "Efficiently manage your time with timer ",
    "url": "pomodoro",
    "clickable": true,
    "premium": false,
    "comingSoon": false,
    "Bg_from": "#6d28d9",
    "Bg_to": "#581c87",
  },
  {
    "id": 10,
    "name": "Sample OMR sheet",
    "imgUrl": omrsheet,
    "desc": "Download and Practice OMR filling for the D-day ",
    "url": "omr",
    "clickable": true,
    "premium": false,
    "comingSoon": false,
    "Bg_from": "#009FC2",
    "Bg_to": "#0D0A0B",
  },
  
];

export default dashboardData;

