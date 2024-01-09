"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { push } = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const [products, setProducts] = useState([
    {
      sku: 1020593,
      name: "Чимэглэл Бөмбөлөг",
      description: "Koopman CAN201000 12ш 3см алтлаг багц NL",
      price: "4,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1020593.jpg",
    },
    {
      sku: 1047445,
      name: "Чимэглэл Бөмбөлөг Edelman",
      description: "1082463 улаан 10см 8289",
      price: "10,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/o/r/ornament-ball-red-2-assorted-d10cm-1603643777_src.jpg",
    },
    {
      sku: 1047310,
      name: "Ширээний Гол Бүтээлэг",
      description:
        "Koopman 767612230 29</p>\n<p>*150см хээтэй хамба 2төрөл NL</p>",
      price: "8,299₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1047310.jpg",
    },
    {
      sku: 1018139,
      name: "Агуулах сав Lock&lock",
      description: "HPL14C 460мл хүнсний 2 тасалгаатай KOR",
      price: "5,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/0/1/01h012482.jpg",
    },
    {
      sku: 1018785,
      name: "Хайруулын таваг LocknLock",
      description: "LEY1203 20см чулуун түрхлэгтэй KOR",
      price: "24,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1018785_1_1.jpg",
    },
    {
      sku: 1021977,
      name: "Таваг Will Ceramic",
      description: "24.5 см W165403 санта бугатай улаан хүрээтэй шаазан 9150",
      price: "22,299₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1021977.jpg",
    },
    {
      sku: 1021996,
      name: "Бялууны таваг Will",
      description: "Ceramic 27*27*24.5 W156634 зурагтай шаазан 9169",
      price: "34,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1021996-removebg-preview_1_.png",
    },
    {
      sku: 1252898,
      name: "Хайруулын таваг Linkfair",
      description: "MGA-ALU03-24P 24см Хөнгөн цагаан Хар",
      price: "39,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1252898__2_-removebg-preview.jpg",
    },
    {
      sku: 1252916,
      name: "Хоолны савны ком",
      description: "Berlinger Haus BL-3397 10ш 20-28см Хар Hаалддаггүй NLD",
      price: "349,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1252916.jpg",
    },
    {
      sku: 1016578,
      name: "Халуун баригч аяга",
      description: "500мл BUGATTI TWIN Цэнхэр BBT-CB500IS",
      price: "49,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/4/1497.jpg",
    },
    {
      sku: 1016573,
      name: "Халуун баригч аяга",
      description: "500мл BUGATTI TWIN LUX Мөнгөлөг BBT-SL500IS",
      price: "49,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/4/1492.jpg",
    },
    {
      sku: 1011880,
      name: "Ор хөнжлийн даавуу",
      description: "Casablanca king size245*228 саарал 100% даавуу",
      price: "349,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/j/u/ju_1.png",
    },
    {
      sku: 1011878,
      name: " Ор хөнжлийн",
      description: "даавуу Casablanca king size245*228 х/саарал 100% даавуун",
      price: "349,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/d/g/dg_4.png",
    },
    {
      sku: 1016209,
      name: "Давс Перец Тос",
      description: "Чигчлүүрний савны ком 6ш Blaumann BL-3435",
      price: "24,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1016209_15.jpg",
    },
    {
      sku: 1015869,
      name: "Агуулах Сав",
      description: "Berlinger Haus Цайвар шар BH/1354",
      price: "27,499₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/b/h/bh-1354_pro2.jpg",
    },
    {
      sku: 1017578,
      name: "Шал Угаагч Topoto",
      description: "M3 запас алчууртай цагаан өнгөтэй",
      price: "99,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/h/4/h4ec6e6deb41e4b72b01c46f13cbdc454j-removebg-preview.png",
    },
    {
      sku: 1017111,
      name: "Хайруулын таваг Cs-Group",
      description: "36см SOLARIS PRO 064563 Бариултай PFOA/PTFE-Free",
      price: "59,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1017111.jpg",
    },
    {
      sku: 1016622,
      name: "Халбага сэрээний ком",
      description: "16ш 4 хүний Ган төмөр Koopman 52010",
      price: "39,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/5/1545_12.jpg",
    },
    {
      sku: 1018268,
      name: "Хоолны Сав Keeeper",
      description: "070248 450мл тритан POL",
      price: "7,799₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/p/o/pojemnik-na-zywnosc-tritan-045-l-swiezy-niebieski-keeeper_1.jpg",
    },
    {
      sku: 1021941,
      name: "Гацуур модны цүнх",
      description: "65*15*30 270см хүртэлх гацуур багтана 9032",
      price: "129,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/s/c/screenshot_2022-01-05_151350.jpg",
    },
    {
      sku: 1247825,
      name: "Сальфетка Ambiente 32516550",
      description: "25x25 Баантагны зурагтай Холимог NLD</p>",
      price: "6,599₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1247825_2_.png",
    },
    {
      sku: 1041166,
      name: "Бялууны хэв 2ш",
      description: "PYREX 913S041/7145 26см/28см Шилэн 0",
      price: "32,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/m/o/mold2.jpg",
    },
    {
      sku: 1018782,
      name: "Хайруулын таваг LocknLock",
      description: "LEY1283 28см LEY1283 чулуун түрхлэгтэй KOR",
      price: "49,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/s/c/screenshot_2021-12-22_164824.jpg",
    },
    {
      sku: 1018721,
      name: "Аяга халуун барьдаг",
      description: "LocknLock LHC4197SLV хандлагчтай, 560 мл KOR",
      price: "39,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1018721_1__1.png",
    },
    {
      sku: 1023867,
      name: "Даавуун уут EHM",
      description: "Roses 34422001 54.5x38см Цэнхэр TUR",
      price: "6,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/0/7/074a942b-5349-426d-8371-80e95f946589_bgvozqpoieagdafr.jpg",
    },
    {
      sku: 1025693,
      name: "Маск EHM Aloe",
      description: "Vera 29034001 25мл Цаасан Ногоон TUR",
      price: "6,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/b/6/b6bcd821-ba30-4147-81f4-b356bed18787_a09enfbapw40elsl.jpg",
    },
    {
      sku: 1018311,
      name: "Агуулах сав LocknLock",
      description: "LLS213 2 талтай 330мл+150мл KOR</p>",
      price: "6,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1018311-2.jpg",
    },
    {
      sku: 1234953,
      name: "Ванны халаад EHM",
      description: "Checky 38914002 L-XL Шаргал TUR",
      price: "169,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0039_j5lyzumjnwiklhvr.jpg",
    },
    {
      sku: 1028730,
      name: "Хоолны таваг EHM",
      description: "Giraffe 33919001 24см улбар Шар TUR",
      price: "15,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/0/1/01ca2678-306f-4c0f-a90f-cca5a46811b2_2scuez1rksbnka9v.jpg",
    },
    {
      sku: 1031357,
      name: "Хүүхдийн нимгэн бүтээлэг",
      description: "EHM Safari 34599001 100x150см Шаргал TUR",
      price: "26,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1031357.jpg",
    },
    {
      sku: 1031427,
      name: "Хүүхдийн орны углаа",
      description: "EHM Mini Clouds 33528001 70x140см Цэнхэр TUR",
      price: "26,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1031427.jpg",
    },
    {
      sku: 1030147,
      name: "Бялууны Таваг Ehm",
      description: "Hermosa 34318003 20см Улаан TUR",
      price: "21,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/4/1495c590-52d6-416e-8bc1-a134a4b16910_df8rchtvjkcdvxhf.jpg",
    },
    {
      sku: 1030148,
      name: "Бялууны Таваг Ehm",
      description: "Hermosa 34318002 20см Шар Ногоон TUR",
      price: "21,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/4/4/44d6f1c7-4857-4bf0-816a-c5fb5c65c594_w4wkqqrkg8tolnup.jpg",
    },
    {
      sku: 1024043,
      name: "Аагчны Аяга Ehm",
      description: "Hermosa 34316001 10см Цэнхэр/Шар Ногоон TUR",
      price: "15,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/6/9/693c79f6-c259-4f20-9231-39f858bffc6b.jpg",
    },
    {
      sku: 1028747,
      name: "Амттаны Суурь Таваг",
      description: "EHM Corolla 33999001 16см Саарал TUR",
      price: "16,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/6/e/6e43ac4f-4920-45dc-9ae2-760a3f41ceb9_8naewylqqc4sjdul.jpg",
    },
    {
      sku: 1022002,
      name: "Гацуур Sino-Wish 13*13*21.5",
      description: "HY19210K лед гэрэл асдаг хөгжимтэй 9175",
      price: "53,499₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/_/1__4_-removebg-preview_1.png",
    },
    {
      sku: 1234830,
      name: "Сагс EHM Circle",
      description: "38517001 20x20x10 см Шаргал TUR",
      price: "79,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0026_v4zf3ai5uwpuwfqq.jpg",
    },
    {
      sku: 1234758,
      name: "Ваар EHM Exotic",
      description: "Wandering 38125002 10x7,5x21,4 см Ногоон TUR",
      price: "49,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0430_xts8bj1fmahjp4xk.jpg",
    },
    {
      sku: 1234690,
      name: "Хиймэл цэцэг EHM",
      description: "Rosalie 37730001 65см Цайвар ягаан TUR",
      price: "19,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0007_0hkgzhr5pnuvcoyg.jpg",
    },
    {
      sku: 1234757,
      name: "Ваар EHM Exotic",
      description: "Wandering 38125001 12x8x14,5 см Ногоон TUR",
      price: "49,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0431_q0cu41ilmf0wz2lc.jpg",
    },
    {
      sku: 1234686,
      name: "Хиймэл цэцэг EHM",
      description: "Classy Rose 37729001 64см Цайвар ягаан TUR",
      price: "19,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0011_sliq1ytd69unmsrn.jpg",
    },
    {
      sku: 1203701,
      name: "Буйдангийн дэр EHM",
      description: "Rachelle 37146001 35x50 см Шар/Цэнхэр TUR",
      price: "69,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0203_gkvzb2m7azlhkjx4.jpg",
    },
    {
      sku: 1234848,
      name: "Декантер EHM Blaze",
      description: "38580002 1300мл+300мл Саарал TUR",
      price: "149,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0096_gpae6dtfodhcsjtl.jpg",
    },
    {
      sku: 1234790,
      name: "Гал тогооны алчуур",
      description: "EHM Relief 38327001 30x50 см Шаргал TUR",
      price: "24,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0171_ex2nimul2ksbme3q.jpg",
    },
    {
      sku: 1234613,
      name: "Шингэн савангын сав",
      description: "EHM Carla 36091004 8x8x22,5 см Өнгөгүй TUR",
      price: "29,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0276_2xzhh85jm2oqo409.jpg",
    },
    {
      sku: 1234634,
      name: "Жимсний суурь таваг",
      description: "EHM Nuss 36812001 27см Гүн бор TUR",
      price: "239,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0377_qkybjfd1f61xggku.jpg",
    },
    {
      sku: 1235045,
      name: "Гоёлын Поднос EHM",
      description: "Flower Chic 39551001 31x46 см Алтлаг TUR",
      price: "79,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0163_zdjiswysptm9ccwa.jpg",
    },
    {
      sku: 1234846,
      name: "Декантер EHM Victoria",
      description: "38578001 800мл Өнгөгүй TUR",
      price: "139,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0098_su8xuhusfrxuw8yb.jpg",
    },
    {
      sku: 1234871,
      name: "Зуурмагны аяга EHM",
      description: "Mix Me 38682002 31см Ногоон TUR",
      price: "69,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0281_cedwhb9fjftrw1p5.jpg",
    },
    {
      sku: 1203704,
      name: "Буйдангийн дэр EHM",
      description: "Chelle 37146004 43x43 см Улаан/Цэнхэр TUR",
      price: "69,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0201_5fnx4mnihjfb5wrx.jpg",
    },
    {
      sku: 1234687,
      name: "Хиймэл цэцэг EHM",
      description: "Classy Rose 37729002 64см Улаан TUR",
      price: "19,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0010_5qhaxfbzfo9fnylu.jpg",
    },
    {
      sku: 1203703,
      name: "Буйдангийн дэр EHM",
      description: "Chelle 37146003 35x50 см Улаан/Цэнхэр TUR",
      price: "69,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0202_puqg6eq9pdf7uv7c.jpg",
    },
    {
      sku: 1235044,
      name: "Ширээний гол EHM",
      description: "Fabiana 39469001 45x150 см Цайвар цэнхэр TUR",
      price: "46,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0368_kjz7ek7uak3w1kyd.jpg",
    },
    {
      sku: 1234688,
      name: "Хиймэл цэцэг EHM",
      description: "Classy Rose 37729003 64см Цагаан TUR",
      price: "19,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0009_661xdzn6w7vlipny.jpg",
    },
    {
      sku: 1234689,
      name: "Хиймэл цэцэг EHM",
      description: "Classy Rose 37729004 64см Шар TUR",
      price: "19,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/e/h/eh0008_cyxncezvfhsvldu9.jpg",
    },
    {
      sku: 1248247,
      name: "Чарга 88x43x11см хэмжээтэй",
      description: "хуванцар 4 өнгө 90кг даацтай",
      price: "23,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1248247.jpg",
    },
    {
      sku: 1248302,
      name: "Хоолны хутгуурын ком",
      description: "Happycall Edge 4004-4017 Саарал 9ш Силикон KOR</p>",
      price: "119,990₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1248302.jpg",
    },
    {
      sku: 1247518,
      name: "Гамбанз Perilla 22003",
      description: "23x37см Цагаан Хуванцар TUR",
      price: "11,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/2/1247518_22.jpg",
    },
    {
      sku: 1026059,
      name: "Хүүхдийн ус сав",
      description: "EHM Space 36538001 500мл Цэнхэр TUR",
      price: "29,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/u/s/usniii_savv.jpg",
    },
    {
      sku: 1026245,
      name: "Дарсны хундага сет",
      description: "EHM Rich Roe 30306001 6ш 50мл Шилэн TUR",
      price: "34,999₮",
      image:
        "https://cdn5.nomin.mn/media/catalog/product/cache/d1b51dc0a71edf9e5dd9c3351b3226ed/1/0/1026245zuurag.jpg",
    },
  ]);

  return (
    <>
      <div className="bg-white h-[80px] shadow-lg flex justify-center">
        <div className="p-2 relative w-[60em]">
          <div className="absolute top-[34%] left-[2%] pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg
             bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Хайх"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-center p-10 w-full h-full bg-gray-100">
        <div className="w-[1000px] flex justify-center">
          <div>
            <div className="flex flex-wrap pl-10">
              {products.length > 0
                ? products.map((product) => {
                    return (
                      <div
                        key={product.sku}
                        className="m-2 h-[350px] w-[280px] rounded-[15px] bg-white shadow-lg flex flex-col justify-between"
                      >
                        <div className="flex justify-center">
                          <img
                            className="block px-[36px] pt-10"
                            src={product.image}
                          />
                        </div>
                        <div className="h-[100px] px-5 py-5 font-montserrat flex flex-col justify-between">
                          <h3 className="text-[14px] uppercase text-[color: rgb(43, 52, 69)]">
                            {product.name}
                          </h3>
                          <div className="text-[14px] text-gray-500">
                            {product.description &&
                            product.description.length > 30
                              ? product.description.slice(0, 31) + "..."
                              : product.description}
                          </div>
                          <div className="text-blue-500 font-bold py-1">
                            {product.price}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
