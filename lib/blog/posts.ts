export type BlogPost = {
  slug: string;
  title: string;
  titleHm: string;
  category: string;
  categoryHm: string;
  excerpt: string;
  excerptHm: string;
  sections: { heading: string; headingHm: string; body: string; bodyHm: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "planning-a-home-search-in-fresno-and-clovis",
    title: "Planning a Home Search in Fresno and Clovis",
    titleHm: "Npaj Nrhiav Tsev Hauv Fresno thiab Clovis",
    category: "Buying",
    categoryHm: "Yuav Tsev",
    excerpt: "A practical way to set priorities before touring homes across the Central Valley.",
    excerptHm: "Ib txoj kev pab koj xaiv yam tseem ceeb ua ntej mus saib tsev thoob Central Valley.",
    sections: [
      { heading: "Start with the non-negotiables", headingHm: "Pib ntawm yam koj yuav tsum muaj", body: "Write down the needs that affect daily life first: commute, accessibility, household size, and the features you cannot easily change later. Keep a separate list for preferences that can flex.", bodyHm: "Sau cov yam uas cuam tshuam rau koj lub neej txhua hnub ua ntej: kev mus ua haujlwm, kev nkag mus tau yooj yim, tsev neeg coob npaum li cas, thiab cov yam uas hloov tsis tau yooj yim. Muab cov yam uas hloov tau sau rau lwm daim ntawv.", },
      { heading: "Compare neighborhoods in person", headingHm: "Mus saib thiab piv cov zej zog", body: "Online details are a useful starting point, but visit areas at the times you expect to be there. Consider routes, nearby services, noise, and how the location fits your routine.", bodyHm: "Cov ntaub ntawv hauv internet pab pib tshawb nrhiav, tiamsis mus saib thaj chaw thaum lub sijhawm koj yuav nyob ntawd. Xav txog txoj kev mus los, cov kev pab nyob ze, suab nrov, thiab seb qhov chaw puas haum koj lub neej txhua hnub.", },
      { heading: "Review each property carefully", headingHm: "Ua tib zoo tshuaj xyuas txhua lub tsev", body: "Confirm listing details and availability on the source listing page, then discuss disclosures, inspections, and next steps with your agent before making a decision.", bodyHm: "Xyuas cov ntsiab lus thiab seb lub tsev puas tseem muaj nyob ntawm nplooj thawj. Ua ntej txiav txim siab, nrog koj tus neeg sawv cev tham txog cov ntaub ntawv qhia txog tsev, kev kuaj xyuas tsev, thiab cov kauj ruam tom ntej.", },
    ],
  },
  {
    slug: "getting-a-fresno-area-home-ready-to-sell",
    title: "Getting a Fresno-Area Home Ready to Sell",
    titleHm: "Npaj Koj Lub Tsev Hauv Fresno Kom Muag Tau",
    category: "Selling",
    categoryHm: "Muag Tsev",
    excerpt: "A focused preparation checklist for sellers deciding what to do before listing.",
    excerptHm: "Daim ntawv teev cov kauj ruam pab tus muag tsev txiav txim seb yuav npaj dab tsi ua ntej tso muag.",
    sections: [
      { heading: "Discuss pricing before projects", headingHm: "Tham txog tus nqi ua ntej kho tsev", body: "Ask for a property-specific pricing conversation before investing in major updates. The right preparation depends on the home's condition, likely buyers, and comparable properties.", bodyHm: "Ua ntej siv nyiaj kho loj, thov tham txog tus nqi uas haum rau koj lub tsev. Kev npaj kom raug nyob ntawm lub tsev zoo li cas, cov neeg yuav tsev uas yuav txaus siab, thiab cov tsev zoo sib xws nyob ze.", },
      { heading: "Prioritize clear presentation", headingHm: "Npaj kom pom lub tsev meej thiab huv", body: "Address visible maintenance, reduce excess clutter, and make rooms easy to understand. A focused plan is usually more useful than trying to renovate everything at once.", bodyHm: "Kho tej yam puas uas pom tseeb, tshem tej khoom ntau dhau, thiab npaj kom pom tias txhua chav siv ua dab tsi. Muaj ib txoj kev npaj meej feem ntau zoo dua li kho txhua yam tib lub sijhawm.", },
      { heading: "Plan the timeline", headingHm: "Npaj sijhawm ua ntej", body: "Coordinate access, photography, showings, and your next move early. A clear schedule helps avoid rushed decisions once a listing is active.", bodyHm: "Npaj ua ntej txog kev nkag mus hauv tsev, thaij duab, teem sijhawm saib tsev, thiab koj qhov chaw yuav mus tom ntej. Muaj sijhawm meej pab kom tsis txhob maj txiav txim thaum lub tsev twb tso muag lawm.", },
    ],
  },
  {
    slug: "questions-to-ask-before-making-an-offer",
    title: "Questions to Ask Before Making an Offer",
    titleHm: "Cov Lus Nug Ua Ntej Koj Thov Yuav Tsev",
    category: "Buying",
    categoryHm: "Yuav Tsev",
    excerpt: "Understand the terms, timeline, and property information before you commit.",
    excerptHm: "Nkag siab cov nqe lus, sijhawm, thiab ntaub ntawv vaj tse ua ntej koj cog lus yuav.",
    sections: [
      { heading: "Understand the full offer", headingHm: "Nkag siab txhua feem ntawm daim ntawv thov yuav", body: "Review price alongside contingencies, deposit, requested timing, and included items. Each term can affect how an offer works for both parties.", bodyHm: "Saib tus nqi nrog rau cov nqe lus uas yuav hloov tau, nyiaj tso ua ntej, sijhawm thov, thiab tej yam uas suav nrog. Txhua nqe lus yuav cuam tshuam rau tus neeg yuav thiab tus muag.", },
      { heading: "Know what is still unknown", headingHm: "Paub yam uas tseem tsis tau meej", body: "Ask which disclosures and reports are available, what inspections may be appropriate, and what deadlines follow acceptance. Your agent can help explain the process, while qualified professionals address legal, lending, and inspection questions.", bodyHm: "Nug seb muaj cov ntaub ntawv qhia thiab ntawv ceeb toom dab tsi, yuav tsum kuaj tsev li cas, thiab tom qab lees txais daim ntawv thov yuav muaj sijhawm kawg dab tsi. Koj tus neeg sawv cev pab piav txheej txheem tau; cov kws tshaj lij tsim nyog yuav teb cov lus nug txog kev cai lij choj, qiv nyiaj, thiab kev kuaj tsev.", },
      { heading: "Make room for a decision", headingHm: "Txiav txim siab kom muaj sijhawm txaus", body: "Before submitting, confirm the maximum cost and terms you are comfortable with. A prepared buyer can respond thoughtfully without treating every home as a now-or-never decision.", bodyHm: "Ua ntej xa daim ntawv thov yuav, paub tseeb tus nqi siab tshaj thiab cov nqe lus uas koj kam txais. Tus neeg yuav uas npaj zoo yuav txiav txim siab tau zoo yam tsis xav tias yuav tsum yuav txhua lub tsev tam sim ntawd.", },
    ],
  },
];