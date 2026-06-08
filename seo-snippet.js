// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.b3pilates.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.b3pilates.com/","title_tag":"Pilates Elmhurst & Classical Pilates | B3 Pilates","meta_description":"Elmhurst Pilates studio offering classical Pilates for mobility, strength and flexibility. Private and small group Pilates to relieve back pain and improve posture."},{"page_url":"https://www.b3pilates.com/classes","title_tag":"Group Pilates Classes Elmhurst | B3 Pilates","meta_description":"Small group Pilates classes and private Pilates lessons in Elmhurst. Build strength and flexibility, improve mobility, and enjoy personalized Pilates instruction."},{"page_url":"https://www.b3pilates.com/plans-pricing-1","title_tag":"Pilates Pricing Elmhurst & Private Lessons | B3 Pilates","meta_description":"Clear Pilates pricing in Elmhurst for private lessons, duet sessions and small group classes. Choose packages that fit your goals and budget at B3 Pilates studio."},{"page_url":"https://www.b3pilates.com/foxfit","title_tag":"Classical Pilates Elmhurst Studio | B3 Pilates","meta_description":"Learn what classical Pilates is at B3 Pilates in Elmhurst. Improve strength, flexibility and posture with authentic Pilates rooted in Joseph Pilates’ original method."},{"page_url":"https://www.b3pilates.com/faqs","title_tag":"Pilates Elmhurst FAQs & Studio Info | B3 Pilates","meta_description":"Answers to common Pilates questions in Elmhurst. Learn how often to come, what to wear and how sessions work at B3 Pilates studio."},{"page_url":"https://www.b3pilates.com/testimonial","title_tag":"Personalized Pilates Instruction Elmhurst | B3 Pilates","meta_description":"Read client testimonials for B3 Pilates in Elmhurst. Discover how personalized Pilates instruction builds strength, flexibility and relieves pain."},{"page_url":"https://www.b3pilates.com/studio-policy","title_tag":"Pilates Studio Policy Elmhurst | B3 Pilates","meta_description":"Review B3 Pilates studio policies in Elmhurst, including cancellations, packages and payments for private Pilates lessons and small group classes."}],"keywords":["Pilates Elmhurst","Private Pilates Lessons Elmhurst","Group Pilates Classes Elmhurst","Pilates for Back Pain Elmhurst","Strength and Flexibility Elmhurst","Classical Pilates Elmhurst","Pilates Pricing Elmhurst","Mobility Classes Elmhurst","Personalized Pilates Instruction Elmhurst","Fitness Studio Elmhurst"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://www.b3pilates.com/#localbusiness",
  "name": "B3 Pilates",
  "url": "https://www.b3pilates.com/",
  "description": "B3 Pilates is a classical Pilates studio in Elmhurst, IL, founded in 2021. The studio blends classical Pilates principles with modern techniques to improve mobility, strength, balance, posture and pain, offering private lessons, duet sessions and small group apparatus classes.",
  "image": [
    "https://static.wixstatic.com/media/a50a99_8070bc694c5a4f10aec9f908838eb36f~mv2.png/v1/fill/w_101,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B3%20Logo_edited.png",
    "https://static.wixstatic.com/media/11062b_8ed9f282bc7c453a8af6f40ce6ea483e~mv2.jpg/v1/fill/w_189,h_126,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_8ed9f282bc7c453a8af6f40ce6ea483e~mv2.jpg",
    "https://static.wixstatic.com/media/a50a99_49b637697d54421eb4ad8d5dfc26c626~mv2.jpeg/v1/fill/w_766,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202021-10-30%20at%209_28_06%20AM.jpeg",
    "https://static.wixstatic.com/media/11062b_25db975d1fab4ab586c73f609bff6cc2~mv2.jpg/v1/fill/w_123,h_82,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_25db975d1fab4ab586c73f609bff6cc2~mv2.jpg",
    "https://static.wixstatic.com/media/11062b_62f39c1b320449cb9c52a411d2ba835d~mv2.jpg/v1/fill/w_72,h_48,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_62f39c1b320449cb9c52a411d2ba835d~mv2.jpg",
    "https://static.wixstatic.com/media/a50a99_9183366fc02043c8a1b6517ca77ac99c%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/a50a99_9183366fc02043c8a1b6517ca77ac99c%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/a50a99_8070bc694c5a4f10aec9f908838eb36f~mv2.png/v1/fill/w_101,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B3%20Logo_edited.png",
  "foundingDate": "2021",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "195 North Addison, Unit A",
    "addressLocality": "Elmhurst",
    "addressRegion": "IL",
    "postalCode": "60126",
    "addressCountry": "US"
  },
  "telephone": "+1-630-220-8315",
  "email": "mailto:b3pilates@gmail.com",
  "areaServed": {
    "@type": "City",
    "name": "Elmhurst"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Stephanie Eder",
    "description": "Owner of B3 Pilates, certified classical Pilates instructor and National Certified Pilates Teacher (NCPT) with over 25 years of experience in the fitness industry, holding a B.S. in Exercise Science and an M.S. in Kinesiology.",
    "jobTitle": "Owner",
    "url": "https://www.b3pilates.com/"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Private Pilates Session",
      "price": "115",
      "priceCurrency": "USD",
      "category": "Pilates private lesson",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Private Pilates Sessions - 4 Lesson Package",
      "price": "392",
      "priceCurrency": "USD",
      "category": "Pilates private lessons package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Private Pilates Sessions - 8 Lesson Package",
      "price": "760",
      "priceCurrency": "USD",
      "category": "Pilates private lessons package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Duet Pilates Session (per person) - 1 Lesson",
      "price": "85",
      "priceCurrency": "USD",
      "category": "Duet Pilates session",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Duet Pilates Session (per person) - 4 Lessons",
      "price": "320",
      "priceCurrency": "USD",
      "category": "Duet Pilates session package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Semi Private Group Apparatus Class - Individual Class",
      "price": "52",
      "priceCurrency": "USD",
      "category": "Small group Pilates apparatus class",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Semi Private Group Apparatus Class - 4 Class Package",
      "price": "185",
      "priceCurrency": "USD",
      "category": "Small group Pilates apparatus class package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "New Student Package - 3 Private Lessons",
      "price": "285",
      "priceCurrency": "USD",
      "category": "Introductory Pilates private lesson package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    },
    {
      "@type": "Offer",
      "name": "Virtual Private Pilates Sessions - 4 Lesson Package",
      "price": "392",
      "priceCurrency": "USD",
      "category": "Virtual Pilates private lessons package",
      "url": "https://www.b3pilates.com/plans-pricing-1"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "B3 Pilates Pricing Plans",
    "url": "https://www.b3pilates.com/plans-pricing-1",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Private Pilates Lessons",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Private Pilates Session",
            "price": "115",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "Private Pilates Sessions - 4 Lesson Package",
            "price": "392",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "Private Pilates Sessions - 8 Lesson Package",
            "price": "760",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "New Student Package - 3 Private Lessons",
            "price": "285",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "Virtual Private Pilates Sessions - 4 Lesson Package",
            "price": "392",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Duet Pilates Sessions",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Duet Pilates Session (per person) - 1 Lesson",
            "price": "85",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "Duet Pilates Session (per person) - 4 Lessons",
            "price": "320",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Small Group Apparatus Classes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Semi Private Group Apparatus Class - Individual Class",
            "price": "52",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          },
          {
            "@type": "Offer",
            "name": "Semi Private Group Apparatus Class - 4 Class Package",
            "price": "185",
            "priceCurrency": "USD",
            "url": "https://www.b3pilates.com/plans-pricing-1"
          }
        ]
      }
    ]
  },
  "serviceType": "Classical Pilates instruction including private lessons, duet sessions, small group apparatus classes, and virtual Pilates sessions.",
  "slogan": "Mobility, Strength, Balance",
  "knowsAbout": [
    "Pilates",
    "classical Pilates",
    "Pilates apparatus",
    "reformer Pilates",
    "tower Pilates",
    "wunda chair Pilates",
    "core strength",
    "mobility training",
    "posture improvement",
    "back pain relief",
    "myofascial release"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
