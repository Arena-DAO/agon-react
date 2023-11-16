export interface CategoryItem {
  url: string;
  title?: string;
  children?: CategoryItem[];
  category_id?: string;
  img?: string;
}

function populateItemToMap(
  daoItem: CategoryItem,
  daoMap: Map<string, CategoryItem> = new Map()
): Map<string, CategoryItem> {
  if (daoItem.url) daoMap.set(daoItem.url, daoItem);
  daoItem.children?.forEach((child) => populateItemToMap(child, daoMap));
  return daoMap;
}

export const CategoryRoot: CategoryItem = {
  url: "",
  children: [
    {
      url: "gaming",
      img: "/category_images/gaming.jpg",
      title: "Gaming",
      children: [
        {
          url: "fortnite",
          title: "Fortnite",
          img: "/category_images/fortnite.webp",
          category_id: "2",
        },
        {
          url: "ea-sports-fc-24",
          title: "EA Sports FC 24",
          img: "/category_images/ea-sports-fc-24.webp",
          category_id: "3",
        },
        {
          url: "overwatch-2",
          title: "Overwatch 2",
          img: "/category_images/overwatch-2.webp",
          category_id: "4",
        },
        {
          url: "rocket-league",
          title: "Rocket League",
          img: "/category_images/rocket-league.webp",
          category_id: "5",
        },
        {
          url: "counter-strike",
          title: "Counter Strike",
          img: "/category_images/counter-strike.webp",
          category_id: "6",
        },
        {
          url: "call-of-duty",
          title: "Call of Duty",
          img: "/category_images/call-of-duty.webp",
          category_id: "7",
        },
        {
          url: "apex-legends",
          title: "Apex Legends",
          img: "/category_images/apex-legends.webp",
          category_id: "8",
        },
      ],
    },
    {
      url: "sports",
      title: "Sports",
      img: "/category_images/sports.jpg",
      category_id: "9",
      children: [
        {
          url: "soccer",
          title: "Soccer",
          img: "/category_images/soccer.jpg",
          category_id: "10",
          children: [
            {
              url: "soccer-kc",
              img: "/category_images/soccer.jpg",
              title: "KC Soccer",
              category_id: "11",
            },
          ],
        },
        { url: "tennis", title: "Tennis", img: "/category_images/tennis.jpg", category_id: "12" },
        {
          url: "basketball",
          title: "Basketball",
          img: "/category_images/basketball.jpg",
          category_id: "13",
        },
        {
          url: "baseball",
          title: "Baseball",
          img: "/category_images/baseball.webp",
          category_id: "14",
        },
        {
          url: "volleyball",
          title: "Volleyball",
          img: "/category_images/volleyball.webp",
          category_id: "15",
        },
      ],
    },
    {
      url: "other",
      title: "Other",
      category_id: "1",
    }
  ],
};

export const CategoryMap = populateItemToMap(CategoryRoot);
