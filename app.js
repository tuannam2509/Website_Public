const fileBase = "Files/";

const people = {
  cheng: ["Dong (Carl) Cheng", "https://sites.google.com/site/chengdongvanderbilt/home?authuser=0"],
  kiet: ["Kiet Duong", "https://sites.google.com/view/kiet-duong"],
  hang: ["Hang Do", "https://www.southampton.ac.uk/people/5y5kzk/doctor-hang-do"],
  toan: ["Toan Huynh", "https://sites.google.com/view/toanluu"],
  anh: ["Anh Phan", "https://cepr.org/about/people/anh-dang-bao-phan"],
  ayse: ["Ayse Sapci", "https://sites.google.com/site/aysesapci/home"],
  crucini: ["Mario J. Crucini", "https://business.purdue.edu/faculty/mcrucini/"],
  cotter: ["Christopher A. Cotter", "http://www.christophercotter.com/"],
  rousseau: ["Peter L. Rousseau", "https://as.vanderbilt.edu/economics/bio/peter-rousseau-econ/"],
  berg: ["Kimberly A. Berg", "https://sites.google.com/site/kimberlyannberg/home"],
  bawa: ["Siraj G. Bawa", "https://sirajbawa.wordpress.com/"],
  jiayu: ["Jiayu Wu (Miami University 18', Honor Thesis)", ""],
  huang: ["Kevin X.D. Huang", "https://as.vanderbilt.edu/econ/bio/kevin-huang"],
  jackie: ["Jackie McCafferty", ""],
  wolff: ["Jonathan Wolff", "https://miamioh.edu/fsb/directory/?up=/directory/wolffjs"],
  povilas: ["Povilas Lastaukas", "https://www.lastauskas.com/"]
};

const publications = [
  ["2026", "State-dependent Distribution Friction and the Transmission of Monetary Policy.", "European Economic Review", "https://www.sciencedirect.com/science/article/abs/pii/S0014292126001650?via%3Dihub", ["cheng"], "State-dependent distribution frictions weaken the real effects of monetary policy.", [["Working paper", fileBase + "EER_2026.pdf"]]],
  ["2026", "Labor Supply, Risk Aversion, and Conflict Uncertainty.", "Risk Analysis", "https://onlinelibrary.wiley.com/doi/10.1111/risa.70308", ["kiet"], "Conflict uncertainty negatively affects individuals' willingness to work.", [["Working paper", fileBase + "RA_2026.pdf"], ["Slides", fileBase + "Presentation_Poland_BEA_2026_June.pdf"]]],
  ["2025", "The Real Effects of Brexit on Labor Demand: Evidence from Firm-level Data.", "Journal of International Economics", "https://www.sciencedirect.com/science/article/pii/S0022199625000856", ["hang", "kiet", "toan"], "The 2020 Brexit implementation led exposed firms to reduce their workforce by up to 15.7% relative to firms near the Irish border.", [["Working paper", fileBase + "JIE_2025.pdf"], ["VoxEU", "https://cepr.org/voxeu/columns/real-effects-brexit-labour-demand"]]],
  ["2024", "From Russia with Love: International Risk-sharing, Sanctions, and Firm Investments.", "Economics Letters", "https://www.sciencedirect.com/science/article/pii/S0165176524004890", ["kiet", "toan", "anh"], "Firms use international risk-sharing to mitigate the adverse effects of sanctions.", [["Working paper", fileBase + "EL2024.pdf"], ["VoxEU", "https://cepr.org/voxeu/columns/how-russian-firms-use-international-risk-sharing-mitigate-effects-sanctions"], ["EuroPP", "https://blogs.lse.ac.uk/europpblog/2024/09/23/how-russian-firms-use-international-risk-sharing-to-mitigate-the-effects-of-sanctions/"]]],
  ["2022", "Housing Wealth Reallocation between Subprime and Prime Borrowers During Recessions.", "Macroeconomic Dynamics", "https://www.cambridge.org/core/journals/macroeconomic-dynamics/article/housing-wealth-reallocation-between-subprime-and-prime-borrowers-during-recessions/04B6DA41C93A4AAA5763A552F6730322", ["ayse"], "Recessions redistribute housing wealth from subprime to prime borrowers as tightened credit conditions disproportionately affect subprime mortgage holders.", [["Working paper", fileBase + "MD_2020_b.pdf"]]],
  ["2021", "Did the American Recovery and Reinvestment Act Help Counties Most Affected by the Great Recession?", "Review of Economic Dynamics", "https://www.sciencedirect.com/science/article/abs/pii/S1094202520301046", ["crucini"], "ARRA stimulus spending did reach the counties most affected by the Great Recession, with statistically significant and economically large risk-pooling effects.", [["Working paper", fileBase + "RED_2020.pdf"], ["Replication data", "https://ideas.repec.org/c/red/ccodes/19-343.html"]]],
  ["2021", "Electrification, Telecommunications, and the Finance-growth Nexus: Evidence from Firm-level Data.", "Energy Economics", "https://www.sciencedirect.com/science/article/abs/pii/S0140988320304138", ["cotter", "rousseau"], "Infrastructure investments operate through financial development to affect firm growth.", [["Working paper", fileBase + "EE_2020.pdf"]]],
  ["2021", "Asymmetric Effects of Sectoral Shifts under Low and High Uncertainty.", "Economic Inquiry", "https://onlinelibrary.wiley.com/doi/abs/10.1111/ecin.12969", ["berg"], "Sectoral shifts are costlier under high uncertainty than under low uncertainty, both empirically and in a two-sector DSGE model.", [["Working paper", fileBase + "EI_2020.pdf"]]],
  ["2020", "Price Flexibility and Output Volatility under Menu Costs.", "Macroeconomic Dynamics", "https://www.cambridge.org/core/journals/macroeconomic-dynamics/article/price-flexibility-and-output-volatility-under-menu-costs/428062C8E069543560B8443CD57AA4D4", [], "Price flexibility can be output-destabilizing under supply shocks, along both the intensive and the extensive margins.", [["Working paper", fileBase + "MD_2020.pdf"]]],
  ["2020", "International Effects of Stock Market Dispersion.", "Southern Economic Journal", "https://doi.org/10.1002/soej.12419", ["jiayu"], "Cross-sectional dispersion in U.S. equity returns affects international business cycle dynamics.", [["Working paper", fileBase + "SEJ_2020.pdf"]]],
  ["2020", "International Effects of Corporate Tax Cuts on Income Distribution.", "Review of International Economics", "https://onlinelibrary.wiley.com/doi/full/10.1111/roie.12485", ["bawa"], "Corporate tax cuts widen income inequality both within and across borders through differentiated equity holdings in a multi-country DSGE model calibrated to U.S. and Canadian data.", [["Working paper", fileBase + "RIE_2020.pdf"]]],
  ["2019", "International Spillovers of U.S. Financial Volatility.", "Journal of International Money and Finance", "https://www.sciencedirect.com/science/article/pii/S0261560618304327", ["berg"], "Exogenous shocks to U.S. financial volatility generate significant spillovers to macroeconomic activity abroad.", [["Working paper", fileBase + "JIMF_2019.pdf"]]],
  ["2015", "Stock Market Volatility and International Business Cycle Dynamics: Evidence from OECD Economies.", "Journal of International Money and Finance", "http://www.sciencedirect.com/science/article/pii/S0261560614001338", [], "Stock market volatility is a significant driver of international business cycle co-movement.", [["Working paper", fileBase + "JIMF_2015.pdf"]]]
];

const workingPapers = [
  ["Under review", "Natural Disasters and Asset Prices: Evidence from Winter Storm Uri.", ["cheng"], "Asset prices respond more strongly to natural disasters for firms facing high investment adjustment costs.", []],
  ["Forthcoming, Oxford Economic Papers", "Real Effects of Inflation Expectation Uncertainty.", [], "A dynamic model with cognitive discounting of future inflation amplifies the consumption decline to uncertainty shocks.", [["Working paper", fileBase + "OEP_2026.pdf"]]],
  ["", "A Tale of Infrequent but Long-lasting Liquidity Traps.", ["huang"], "In a nonlinear DSGE model with heterogeneous firms, both liquidity trap duration and the government spending multiplier are hump-shaped in the size of fiscal stimulus.", []],
  ["", "Growth in a Time of (Projected) Debt.", ["jackie", "wolff"], "An increase in projected debt reduces growth above a threshold but raises it below.", []],
  ["Under review", "Sectoral Shifts and Geopolitical Risks.", ["berg"], "Unexpected geopolitical shocks induce sectoral shifts and output declines.", []],
  ["", "What Matters for the Rise in Trade? Evidence from the African Continental Free Trade Area.", ["kiet", "toan", "povilas"], "AfCFTA promoted trade for firms with prior overseas export experience, those in goods-producing sectors, and those with lower capital adjustment costs.", [["Slides", "https://www.dropbox.com/scl/fi/wncouqrmw9rkemebnlqev/presentation_frc.pdf?rlkey=bhkolj7z3dv03ihxnswgnn3z6&st=wm2iih5h&dl=0"]]]
];

function appendText(parent, text) {
  parent.append(document.createTextNode(text));
}

function appendAuthors(parent, authorIds) {
  authorIds.forEach((authorId, index) => {
    const [name, url] = people[authorId];
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = name;
      parent.append(link);
    } else {
      appendText(parent, name);
    }
    const isLast = index === authorIds.length - 1;
    if (!isLast) appendText(parent, index === authorIds.length - 2 ? (authorIds.length === 2 ? " and " : ", and ") : ", ");
  });
}

function makeLink(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
}

function renderResearchItems(containerId, items, isPublication) {
  const container = document.getElementById(containerId);
  items.forEach((item) => {
    const [first, title, journalOrAuthors, urlOrSummary, authorsOrLinks, summaryOrUndefined, linksOrUndefined] = item;
    const journal = isPublication ? journalOrAuthors : first;
    const url = isPublication ? urlOrSummary : "";
    const authorIds = isPublication ? authorsOrLinks : journalOrAuthors;
    const summary = isPublication ? summaryOrUndefined : urlOrSummary;
    const links = isPublication ? linksOrUndefined : authorsOrLinks;
    const row = document.createElement("button");
    row.className = "research-item";
    row.type = "button";
    row.setAttribute("aria-expanded", "false");

    const firstColumn = document.createElement("span");
    firstColumn.className = "research-year";
    firstColumn.textContent = isPublication ? first : "";
    const content = document.createElement("span");
    const titleElement = document.createElement("span");
    titleElement.className = "research-title";
    titleElement.textContent = `"${title}"`;
    const meta = document.createElement("span");
    meta.className = "research-meta";
    if (journal) {
      const journalElement = document.createElement("em");
      journalElement.textContent = journal;
      meta.append(journalElement);
    }
    if (authorIds.length) {
      appendText(meta, journal ? " with " : "with ");
      appendAuthors(meta, authorIds);
    } else if (journal) {
      appendText(meta, ".");
    }
    const details = document.createElement("span");
    details.className = "research-details";
    const summaryElement = document.createElement("span");
    summaryElement.className = "research-summary";
    summaryElement.textContent = summary;
    details.append(summaryElement);
    const linkList = document.createElement("span");
    linkList.className = "paper-links";
    if (url) linkList.append(makeLink("Published version", url));
    links.forEach(([label, href]) => linkList.append(makeLink(label, href)));
    details.append(linkList);
    content.append(titleElement, meta, details);
    const marker = document.createElement("span");
    marker.className = "research-marker";
    marker.textContent = "+";
    row.append(firstColumn, content, marker);
    row.addEventListener("click", () => {
      const isOpen = row.getAttribute("aria-expanded") === "true";
      row.setAttribute("aria-expanded", String(!isOpen));
      marker.textContent = isOpen ? "+" : "-";
    });
    container.append(row);
  });
}

renderResearchItems("publications", publications, true);
renderResearchItems("working-papers", workingPapers, false);