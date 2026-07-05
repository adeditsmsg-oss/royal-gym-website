// app/config.ts - ROYAL Gym (IIT, Prembazar) Business Configuration

export const GYM_CONFIG = {
  name: "ROYAL Gym (IIT, Prembazar)",
  shortName: "ROYAL Gym",
  tagline: "Unleash Your Inner Beast. Build Your Legacy.",
  taglineBengali: "খড়গপুরের সবচেয়ে প্রিমিয়াম ফিটনেস ডেস্টিনেশন!",
  phone: "+91 97348 52584",
  phoneRaw: "+919734852584",
  whatsapp: "919734852584", // Configurable WhatsApp number
  address: "Durga Puja Mandap, Opposite to Prembazar, Prembazar, Kharagpur, West Bengal 721301",
  addressBengali: "দুর্গাপূজা মণ্ডপ, প্রেমবাজারের বিপরীতে, প্রেমবাজার, খড়গপুর, পশ্চিমবঙ্গ - 721301",
  googleMapsLink: "https://www.google.com/maps/place/ROYAL+Gym+(+IIT,+prembazar+)/@22.3064602,87.3039656,17z/data=!4m8!3m7!1s0x3a1d473af4c62f7f:0x251e2f94fa7b873b!8m2!3d22.3064602!4d87.3039656!9m1!1b1!16s%2Fg%2F11h_vm5tty",
  googleMapsEmbed: "https://maps.google.com/maps?q=ROYAL%20Gym%20IIT%20prembazar%20Kharagpur&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  rating: "4.7",
  reviewCount: "210+",
  priceRange: "₹700 - ₹1,800 / Month",
  
  operatingHours: [
    { days: "Monday - Saturday (সোমবার - শনিবার)", hours: "5:00 AM - 10:00 PM" },
    { days: "Sunday (রবিবার)", hours: "6:00 AM - 1:00 PM" }
  ],
  
  // Local SEO landmarks
  landmarks: [
    "Opposite Prembazar (প্রেমবাজারের বিপরীতে)",
    "Durga Puja Mandap (দুর্গাপূজা মণ্ডপ)",
    "Near Amit Medicals (অমিত মেডিক্যালের কাছে)",
    "IIT Kharagpur Prembazar Gate (আইআইটি খড়গপুর প্রেমবাজার গেট)",
    "Hijli Area (হিজলি অঞ্চল)",
    "Kharagpur Railway Station (খড়গপুর রেলওয়ে স্টেশন)"
  ],
  
  // Real-like mixed English & Bengali customer reviews
  reviews: [
    {
      id: 1,
      name: "Aritra Mukherjee",
      rating: 5,
      date: "1 week ago",
      text: "Best gym near IIT Kharagpur campus. পড়াশোনার পাশাপাশি ফিট থাকাটা খুব জরুরি, আর রয়্যাল জিম তার জন্য বেস্ট জায়গা। Trainers are extremely helpful and friendly. Pocket friendly for students.",
      role: "IIT KGP Student",
      avatarBg: "bg-amber-500 text-black"
    },
    {
      id: 2,
      name: "Sudip Das",
      rating: 5,
      date: "3 weeks ago",
      text: "Heavy plate loaded machines and great dumbbell sets. খড়গপুরে কম বাজেটে এর থেকে ভালো জিম আর নেই। The vibe here is pure energy, motivates you to lift heavier!",
      role: "Local Business Owner",
      avatarBg: "bg-zinc-800 text-amber-400"
    },
    {
      id: 3,
      name: "Pooja Sen",
      rating: 5,
      date: "1 month ago",
      text: "খুবই ভালো পরিবেশ, মেয়েদের জন্যও একদম পারফেক্ট ও সেফ। Female trainers are also very skilled and supportive. Clean locker rooms and washrooms are maintained well daily.",
      role: "Fitness Enthusiast",
      avatarBg: "bg-zinc-700 text-white"
    },
    {
      id: 4,
      name: "Rahul Roy",
      rating: 5,
      date: "2 weeks ago",
      text: "Equipment quality is solid, especially the plate-loaded chest press and squat racks. ট্রেনাররা সবসময় পোশ্চার কারেক্ট করে দেয়। Highly recommended for serious bodybuilding.",
      role: "Competitive Powerlifter",
      avatarBg: "bg-amber-600 text-black"
    },
    {
      id: 5,
      name: "Deepak Shaw",
      rating: 5,
      date: "1 month ago",
      text: "Great cardio and steam bath section. সন্ধ্যার সময় একটু ভিড় হয় কিন্তু সকালের দিকে জিম ফ্লোরটা বেশ ফাঁকা আর শান্ত থাকে। Staff is polite and helpful.",
      role: "Software Engineer",
      avatarBg: "bg-zinc-800 text-amber-400"
    },
    {
      id: 6,
      name: "Soma Dutta",
      rating: 5,
      date: "2 months ago",
      text: "ওজন কমানোর জন্য ভর্তি হয়েছিলাম, ২ মাসে ৪ কেজি কমিয়েছি। The diet guide is very realistic and matches our Bengali home-cooked food. Value for money gym near Prembazar.",
      role: "Homemaker",
      avatarBg: "bg-zinc-700 text-white"
    },
    {
      id: 7,
      name: "Vikram Sengupta",
      rating: 5,
      date: "5 days ago",
      text: "High energy music, bright lighting, and motivational environment. 'DON'T QUIT' neon light টা দেখলেই ওয়ার্কআউট করার এনার্জি বেড়ে যায়। Best fitness center around IIT Kharagpur.",
      role: "Research Scholar",
      avatarBg: "bg-amber-500 text-black"
    }
  ],

  // Gym training programs
  programs: [
    {
      id: "strength-training",
      name: "Strength & Conditioning",
      nameBengali: "স্ট্রেন্থ ও কন্ডিশনিং",
      desc: "Unlock your physical limits. Master heavy squats, deadlifts, and bench presses under guidance of expert trainers, utilizing our heavy-duty Smith machines and loaded plate gear.",
      descBengali: "আমাদের উন্নত মানের হেভি-ডিউটি মেশিন এবং পেশাদার গাইডেন্সের সাহায্যে আপনার শক্তির বিকাশ ও পেশীর গঠন করুন।",
      image: "male_bodybuilding",
      badge: "Popular",
      benefits: ["High-grade imported plate machines", "Custom progressive overload templates", "Injury prevention form coaching"]
    },
    {
      id: "weight-loss",
      name: "Fat Melt & Weight Loss",
      nameBengali: "ওজন ও চর্বি কমানোর প্রোগ্রাম",
      desc: "Burn fat faster with calorie deficit blueprints, HIIT cardio machines, kettlebells, and dynamic metabolic conditioning workouts.",
      descBengali: "সঠিক পুষ্টি পরামর্শ এবং হাই-ইনটেনসিটি কার্ডিও সেশনের মেলবন্ধনে বৈজ্ঞানিক উপায়ে দ্রুত আপনার মেদ ঝরিয়ে ফেলুন।",
      image: "female_fitness",
      badge: "High Success",
      benefits: ["Individualized cardio progression plans", "Bengali-friendly customized diet logs", "Weekly body fat composition checks"]
    },
    {
      id: "personal-training",
      name: "1-on-1 VIP Personal Training",
      nameBengali: "১:১ পার্সোনাল ট্রেনিং",
      desc: "Accelerate your body transformation with dedicated attention. Perfect your posture, customize your workouts, and get direct trainer support.",
      descBengali: "অভিজ্ঞ ব্যক্তিগত কোচের অধীনে ওয়ান-অন-ওয়ান ট্রেনিংয়ের মাধ্যমে আপনার নির্দিষ্ট গোল দ্রুত ও নিরাপদে অর্জন করুন।",
      image: "trainer_coaching",
      badge: "Elite Choice",
      benefits: ["100% dedicated certified elite coach", "Biomechanical assessment & mobility guides", "Daily meal checks and support"]
    },
    {
      id: "crossfit-functional",
      name: "CrossFit & Functional Fitness",
      nameBengali: "ক্রসফিট ও ফাংশনাল ফিটনেস",
      desc: "Build athletic performance, raw stamina, and core stabilization with kettlebells, battle ropes, tire flips, and athletic conditioning drills.",
      descBengali: "স্ট্যামিনা, বডি ব্যালেন্স ও হাই-এনার্জি বাড়াতে আমাদের আলাদা জোন-এ হাই-ইনটেনসিটি ফাংশনাল ট্রেনিং করুন।",
      image: "crossfit_training",
      badge: "High Intensity",
      benefits: ["Dynamic functional movements", "Unmatched stamina & lung capacity", "Group energy that keeps you motivated"]
    },
    {
      id: "cardio-zone",
      name: "Cardio & Stamina Zone",
      nameBengali: "কার্ডিও ও স্ট্যামিনা জোন",
      desc: "Boost your heart health and cardiovascular stamina with our line of modern treadmills, spin bikes, and cross-trainers in a fully air-conditioned section.",
      descBengali: "উন্নত মানের ট্রেডমিল ও বাইক ব্যবহার করে স্ট্যামিনা ও হৃদযন্ত্রের কার্যক্ষমতা উন্নত করুন।",
      image: "cardio_section",
      badge: "Essential",
      benefits: ["Top-tier cardiovascular machinery", "Heart rate zone monitoring guides", "Spacious, neat & clean floor layouts"]
    },
    {
      id: "diet-nutrition",
      name: "Custom Diet & Nutrition Plans",
      nameBengali: "কাস্টম ডায়েট ও পুষ্টি পরামর্শ",
      desc: "Eat right without starving. Get custom calorie and macronutrient designs utilizing typical local Bengali diets so you can maintain them long-term.",
      descBengali: "আমাদের পুষ্টিবিদের পরামর্শে ঘরের সুস্বাদু খাবার খেয়েই ওজন নিয়ন্ত্রণ ও সুস্বাস্থ্য অর্জন করুন।",
      image: "nutrition_shake",
      badge: "Lifestyle",
      benefits: ["Custom macro profiles & meal guides", "Affordable Bengali food alternatives", "Supplement guidance for safety"]
    }
  ],

  // Membership plans
  pricingPlans: [
    {
      id: "classic",
      name: "Royal Classic",
      nameBengali: "রয়্যাল ক্লাসিক",
      priceMonthly: 800,
      priceAnnually: 6999,
      features: [
        "Full gym floor & imported free weights access",
        "Modern cardio machines & spinning zone",
        "General trainer floor guidance",
        "Neat and clean lockers & changing rooms",
        "Initial fitness check & BMI consultation",
        "জিম ফ্লোর ও হেভি ওয়েট এরিয়ায় ফুল অ্যাক্সেস",
        "সাধারণ ফ্লোর ট্রেনারের সার্বিক সাহায্য",
        "সুরক্ষিত লকার ও ওয়াশরুম ব্যবহারের সুবিধা"
      ],
      isPopular: false
    },
    {
      id: "pro-club",
      name: "Royal Pro Club",
      nameBengali: "রয়্যাল প্রো ক্লাব",
      priceMonthly: 1200,
      priceAnnually: 9999,
      features: [
        "Everything in Classic + CrossFit Zone access",
        "Customized workout chart (updated monthly)",
        "Bi-weekly body fat composition tracking",
        "Diet plan blueprint matching home-cooked food",
        "Priority lockers & steam bath session access",
        "ক্লাসিক সুবিধা + ক্রসফিট ও কার্ডিও জোন অ্যাক্সেস",
        "কাস্টমাইজড ওয়ার্কআউট প্ল্যান ও ডায়েট চার্ট",
        "মাসে ২ বার বডি ফ্যাট ট্র্যাকিং"
      ],
      isPopular: true
    },
    {
      id: "vip-pt",
      name: "Royal VIP 1-on-1 PT",
      nameBengali: "রয়্যাল ভিআইপি পার্সোনাল ট্রেনিং",
      priceMonthly: 3999,
      priceAnnually: 29999,
      features: [
        "Dedicated Certified Personal Trainer (1-on-1)",
        "Fully customized meal plan by in-house nutritionist",
        "Biomechanics analysis & form correction sessions",
        "Premium fitness goals tracking logs",
        "VIP private locker & towels access",
        "১:১ ওয়ান-অন-ওয়ান ডেডিকেটেড সার্টিফাইড ট্রেনার",
        "পুষ্টিবিদের তৈরি ক্লিনিকাল ডায়েট চার্ট",
        "পেশীর আঘাত এড়াতে সঠিক ফর্ম শিক্ষা"
      ],
      isPopular: false
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What are the timings of ROYAL Gym Prembazar?",
      qBengali: "রয়্যাল জিমের খোলার সময়সূচী কী?",
      a: "ROYAL Gym is open Monday through Saturday from 5:00 AM to 10:00 PM, and on Sundays from 6:00 AM to 1:00 PM. You can easily fit your workout before classes, during mid-day, or after evening study hours.",
      aBengali: "আমাদের জিম সোমবার থেকে শনিবার সকাল ৫:০০ থেকে রাত ১০:০০ টা পর্যন্ত এবং রবিবার সকাল ৬:০০ থেকে দুপুর ১:০০ টা পর্যন্ত খোলা থাকে।"
    },
    {
      q: "Is there a female-safe environment and female trainers?",
      qBengali: "জিমের পরিবেশ কি মেয়েদের জন্য সুরক্ষিত এবং ফিমেল ট্রেনার আছেন?",
      a: "Absolutely. Safety, cleanliness, and comfort are our primary standards. The gym is under continuous CCTV surveillance, features dedicated female lockers, and has certified, friendly trainers who ensure a very professional environment.",
      aBengali: "হ্যাঁ, জিমটি সম্পূর্ণ সিসিটিভি ক্যামেরা দ্বারা নিয়ন্ত্রিত, মেয়েদের জন্য আলাদা লকার রুম আছে এবং আমাদের ট্রেনাররা অত্যন্ত ভদ্র ও সাহায্যকারী।"
    },
    {
      q: "Can I take a free trial session before joining?",
      qBengali: "ভর্তি হওয়ার আগে কি ফ্রী ট্রায়াল ক্লাস করা যাবে?",
      a: "Yes! We offer a 1-Day Free VIP Trial Pass for all local residents and IIT Kharagpur students. Come, experience the energy, test our imported yellow frame machines, and check the vibe before committing.",
      aBengali: "হ্যাঁ! স্থানীয় বাসিন্দা ও আইআইটি খড়গপুরের ছাত্রদের জন্য ১ দিনের ফ্রী ভিআইপি ট্রায়াল পাস রয়েছে। আপনি সরাসরি জিম ভিজিট করে ফ্রী ট্রায়াল নিতে পারেন।"
    },
    {
      q: "Do I get a diet chart with my membership?",
      qBengali: "মেম্বারশিপের সাথে কি ডায়েট চার্ট দেওয়া হবে?",
      a: "Yes, members of our Royal Pro Club and VIP PT plans receive customized diet plans. Our nutrition layouts focus on realistic local Bengali recipes that are easy to prepare and budget-friendly for college students.",
      aBengali: "হ্যাঁ, প্রো মেম্বারশিপ ও পার্সোনাল ট্রেনিংয়ে কাস্টমাইজড ডায়েট চার্ট দেওয়া হয়, যা আপনার ঘরের খাবারের উপর ভিত্তি করে তৈরি।"
    },
    {
      q: "Where is the gym located in Prembazar?",
      qBengali: "জিমটি প্রেমবাজারের ঠিক কোথায় অবস্থিত?",
      a: "We are located right at the Durga Puja Mandap, Opposite to Prembazar, Kharagpur. It is extremely close to the IIT Kharagpur Prembazar boundary wall and Amit Medicals, making it very accessible with ample bike parking space.",
      aBengali: "আমরা প্রেমবাজার দুর্গাপূজা মণ্ডপ এর কাছে, অমিত মেডিক্যালের বিপরীতে অবস্থিত। এখানে বাইক ও সাইকেল পার্কিংয়ের পর্যাপ্ত জায়গা রয়েছে।"
    }
  ]
};
