const notesData = [
  {
    id: 1,
    name: "C Programming",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: "https://www.vssut.ac.in/lecture_notes/lecture1424354156.pdf",
      },
    ],
    route: "c",
    suggestedLinks: [
      {
        name: "Note Link 1",
        url: " https://www.javatpoint.com/c-programming-language-tutorial",
      },
      { name: "Note Link 2", url: " https://www.programiz.com/c-programming" },
      { name: "Note Link 3", url: " https://www.learn-c.org/" },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=rLf3jnHxSmU&list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
      "https://youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR&si=RBzr2RN9Uh0xCBjg",
      "https://youtube.com/playlist?list=PLqleLpAMfxGBn9v-K17ztBfNXHzPnX5sN&si=dSpKUsgJeWVZ2bOb",
    ],
    Bg_from: "#f97316",
    Bg_to: "#b91c1c",
  },
  {
    id: 2,
    name: "Digital Logic",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: " https://mrcet.com/downloads/digital_notes/IT/DIGITAL%20LOGIC%20DESIGN%20(R17A0461).pdf",
      },
    ],
    route: "oop",
    suggestedLinks: [
     
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
    ],
    Bg_from: "#0E48DE",
    Bg_to: "#031641",
  },
  {
    id: 3,
    name: "Unix",
    premium: true,
    noteUrl: [
      {
        name: "Unix",
        url: "https://khitguntur.ac.in/materials/cse/new/3-1%20UNIX%20R16.pdf",
      },
    ],
    route: "unix",
    suggestedLinks: [
      { name: "Note Link 1", url: " https://kb.iu.edu/d/afsk" },
      {
        name: "Note Link 2",
        url: " https://www.geeksforgeeks.org/essential-linuxunix-commands/",
      },
      {
        name: "Note Link 3",
        url: "https://www.tutorialspoint.com/unix/shell_scripting.htm ",
      },
      {
        name: "Note Link 4",
        url: " https://www.tutorialspoint.com/unix/unix-vi-editor.htm",
      },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=LxrKRkCyRwU&list=PLUDwpEzHYYLtjJWMCJJDoPXjeSfzrCF-F",
      "https://www.youtube.com/watch?v=cQepf9fY6cE&list=PLS1QulWo1RIYmaxcEqw5JhK3b-6rgdWO_",
      "https://youtu.be/iwolPf6kN-k?si=JmziB6dIdGIJ5qTV",
    ],
    Bg_from: "#f87171",
    Bg_to: "#7f1d1d",
  },
  {
    id: 4,
    name: "Data Structures & Algorithms",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: "https://mrcet.com/downloads/digital_notes/CSE/II%20Year/DATA%20STRUCTURES%20DIGITAL%20NOTES.pdf",
      },
    ],
    route: "dsa",
    suggestedLinks: [
      {
        name: "Note Link 1",
        url: " https://www.javatpoint.com/data-structure-tutorial",
      },
      { name: "Note Link 2", url: "https://www.programiz.com/dsa " },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=3cU__spdMIw&list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y&si=ghuMaulQ6Vi5Jf2U",
      "https://youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu&si=RrGE3thnF6lcF7Xi",
    ],
    Bg_from: "#64748b",
    Bg_to: "#1e293b",
  },
  {
    id: 5,
    name: "Computer Organization and Architecture",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: " https://mrcet.com/downloads/digital_notes/IT/R18A1201%20COA.pdf",
      },
    ],
    route: "itc",
    suggestedLinks: [
      {
        name: "Note Link 1",
        url: " https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/",
      },
      {
        name: "Note Link 2",
        url: "https://www.studytonight.com/computer-architecture/ ",
      },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=L9X7XXfHYdU&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=dVbx5qpjb6AbrhVZ",
    ],
    Bg_from: "#059669",
    Bg_to: "#0f766e",
  },
  {
    id: 6,
    name: "Operating System",
    premium: true,
    noteUrl: [
      {
        name: "Note Link 1",
        url: " https://mrcet.com/downloads/digital_notes/CSE/II%20Year/OPERATING%20SYSTEMS%20%20NOTES%20R18.pdf",
      },
    ],
    route: "os",
    suggestedLinks: [
      {
        name: "Note Link 1",
        url: "https://www.javatpoint.com/operating-system ",
      },
      {
        name: "Note Link 2",
        url: " https://www.gatevidyalay.com/operating-system/",
      },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=xw_OuOhjauw&list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD",
      "https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=3xGTE72gHG0n18-7",
      "https://youtube.com/playlist?list=PLV8vIYTIdSnZ67NQObdXE0gFjrzPrNKHp&si=mt6miw0068mjx97b",
    ],
    Bg_from: "#009FC2",
    Bg_to: "#0D0A0B",
  },
  {
    id: 7,
    name: "Computer Network",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/COMPUTER%20NETWORKS%20NOTES.pdf ",
      },
    ],
    route: "network",
    suggestedLinks: [
      {
        name: "Note Link 1",
        url: "https://www.javatpoint.com/computer-network-tutorial ",
      },
      {
        name: "Note Link 2",
        url: " https://www.gatevidyalay.com/computer-networks/",
      },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=q3Z3Qa1UNBA&list=PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd",
      "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
      "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
    ],
    Bg_from: "#64748b",
    Bg_to: "#1e293b",
  },
  {
    id: 8,
    name: "DBMS",
    premium: true,
    noteUrl: [
      {
        name: "DBMS",
        url: "https://mrcet.com/downloads/digital_notes/CSE/II%20Year/DBMS.pdf",
      },
    ],
    route: "dbms",
    suggestedLinks: [
      { name: "Note Link 1", url: " https://www.javatpoint.com/dbms-tutorial" },
      {
        name: "Note Link 2",
        url: " https://www.gatevidyalay.com/database-management-system/",
      },
    ],
    suggestedYoutubePlaylist: [
      "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
      "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=qxbRz9ysS-nFCE7o",
    ],
    Bg_from: "#F70000",
    Bg_to: "#960F0F",
  },
  {
    id: 9,
    name: "Theory of Computation",
    premium: false,
    noteUrl: [
      {
        name: "Note Link 1",
        url: " https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf",
      },
    ],
    route: "softwareengineering",
    suggestedLinks: [
    ],
    suggestedYoutubePlaylist: [
      "https://www.youhttps://www.youtube.com/watch?v=58N2N7zJGrQ&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    ],
    Bg_from: "#6d28d9",
    Bg_to: "#581c87",
  },
 
];

export default notesData;
