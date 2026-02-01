export const metadata = {
  title: "Notice | UTEI Computer Department",
};

const notices = [
  {
    title: "ভর্তি বিজ্ঞপ্তি ২০২6",
    date: "2026-02-10",
    desc: "কম্পিউটার ডিপার্টমেন্টে ২০২6 শিক্ষাবর্ষে ভর্তি কার্যক্রম শুরু হয়েছে।",
    link: "/notices/admission-2026.pdf",
  },
  {
    title: "সেমিস্টার ফাইনাল পরীক্ষা",
    date: "2026-05-05",
    desc: "সকল শিক্ষার্থীদের নির্ধারিত সময় অনুযায়ী পরীক্ষায় উপস্থিত থাকতে বলা হলো।",
    link: "",
  },
  {
    title: "ক্লাস রুটিন আপডেট",
    date: "2026-01-25",
    desc: "নতুন ক্লাস রুটিন ওয়েবসাইটে প্রকাশ করা হয়েছে।",
    link: "/notices/class-routine.pdf",
  },
];

function isNew(dateStr) {
  const noticeDate = new Date(dateStr);
  const today = new Date();
  const diffDays = (today - noticeDate) / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export default function NoticePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        📢 Notice Board
      </h1>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="border-l-4 border-green-600 bg-green-50 p-4 rounded shadow-sm"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-green-800">
                {notice.title}
              </h2>
              {isNew(notice.date) && (
                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                  NEW
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600">
              {new Date(notice.date).toDateString()}
            </p>

            <p className="mt-2 text-gray-700">{notice.desc}</p>

            {notice.link && (
              <a
                href={notice.link}
                target="_blank"
                className="inline-block mt-3 text-green-700 font-medium underline"
              >
                View / Download
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

