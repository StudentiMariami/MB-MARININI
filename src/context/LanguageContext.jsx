import { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export const LanguageContext = createContext();

const translations = {
  en: {
    homeTitle: "Welcome to MB MARININI Shop",
    homeSubtitle: "Explore items, add to cart, and checkout with style.",
    productsTitle: "Products",
    cartTitle: "Your Cart",
    aboutTitle: "About Us",
    addToCart: "Add to cart",
    removeItem: "Remove",
    emptyCart: "Your cart is empty",
    theme: "Theme",
    language: "Language",
    checkout: "Checkout",
    total: "Total",
    viewCart: "View Cart",
    modalTitle: "Product Added",
    modalClose: "Close",
    orderConfirmed: "Order Confirmed",
    orderSuccess: "Your order was successfully placed.",
    navHome: "Home",
    navProducts: "Products",
    navCart: "Cart",
    navAbout: "About",
    lastVisited: "Last visited",
    brandSubtitle: "lc waikiki dupe",
    browseProducts: "Browse Products",
    loadProducts: "Loading products...",
    errorProducts: "Unable to load products.",
    contentAbout:
      "This website was built by Mariam Bidzinashvili. She unfortunately had no better ideas than LC Waikiki, but the font family really reminded her of that store, so we got MB MARININI.",
    featureHooks: "About Me",
    featureHooksDescription:
      "Mariam Bidzinashvili is a student at BTU since 2022. She likes frontend development and hopes to work as a developer soon.",
    featureApi: "LC WAIKIKI",
    featureApiDescription:
      "LC Waikiki is a Turkish ready-to-wear clothing and lifestyle retailer headquartered in Istanbul. The brand was founded in France in 1988 and became Turkish-owned in 1997.",
    featureResponsive: "Creative Ideas",
    featureResponsiveDescription:
      "Stealing someone else's ideas is the unauthorized copying, sharing, or claiming ownership of another person's work, making it both an ethical and often legal violation.",
    notFoundMessage: "We couldn’t locate the page you were looking for.",
    returnHome: "Return home",
    qtyLabel: "Qty",
    addedProduct: "Added to Cart",
    productAddedMessage: "has been added to your cart.",
  },
  ka: {
    homeTitle: "კეთილი იყოს თქვენი მობრძანება MB MARININI-ის მაღაზიაში",
    homeSubtitle:
      "დაათვალიერე პროდუქტები, დაამატე კალათაში და შეიძინე ახალი სტილი.",
    productsTitle: "ტანსაცმელი",
    cartTitle: "თქვენი კალათა",
    aboutTitle: "ჩვენ შესახებ",
    addToCart: "კალათაში დამატება",
    removeItem: "წაშლა",
    emptyCart: "თქვენი კალათი ცარიელია",
    theme: "თემა",
    language: "ენა",
    checkout: "გადახდა",
    total: "სულ",
    viewCart: "კალათის ნახვა",
    modalTitle: "ტანსაცმელი დაემატა",
    modalClose: "დახურვა",
    orderConfirmed: "შეკვეთა დადასტურდა",
    orderSuccess: "თქვენი შეკვეთა წარმატებით შესრულდა.",
    navHome: "მთავარი",
    navProducts: "ტანსაცმელი",
    navCart: "კალათა",
    navAbout: "ჩვენ შესახებ",
    lastVisited: "ბოლოს ნანახი",
    brandSubtitle: "lc waikiki-ის დუპლიკატი",
    browseProducts: "კოლექციის დათვალიერება",
    loadProducts: "ტანსაცმელი იტვირთება...",
    errorProducts: "ვერ მოხერხდა ტანსაცმელი ჩატვირთვა.",
    contentAbout:
      "ეს ვებსაიტი მარიამ ბიძინაშვილმა შექმნა. სამწუხაროდ, მას LC Waikiki-ზე უკეთესი იდეები არ ჰქონდა, მაგრამ font family მას იმ მაღაზიას ძალიან აგონებდა, ამიტომ MB MARININI შევიძინეთ.",
    featureHooks: "ჩემ შესახებ",
    featureHooksDescription:
      "მარიამ ბიძინაშვილი BTU-ის სტუდენტია 2022 წლიდან. მას ძალიან მოსწონს frontend დეველოპმენტი და იმედოვნებს რომ მალე გახდება პროფესიონალი დეველოპერი.",
    featureApi: "LC WAIKIKI",
    featureApiDescription:
      "LC Waikiki თურქული მზა ტანსაცმლისა და ცხოვრების სტილის საცალო ვაჭრობის კომპანიაა, რომლის სათაო ოფისი სტამბოლში მდებარეობს. ბრენდი საფრანგეთში 1988 წელს დაარსდა და თურქეთის საკუთრებაში 1997 წელს გადავიდა",
    featureResponsive: "კრეატიული აზროვნება",
    featureResponsiveDescription:
      "სხვისი იდეების მითვისება არის სხვა ადამიანის ნამუშევრის უნებართვოდ კოპირება, გავრცელება ან საკუთარად გამოცხადება, რაც ეთიკურ და ხშირად სამართლებრივ დარღვევას წარმოადგენს.",
    notFoundMessage: "ეს გვერდი ვერ მოიძებნა.",
    returnHome: "მთავარი გვერდზე დაბრუნება",
    qtyLabel: "რაოდენობა",
    addedProduct: "ტანსაცმელი კალათაში დაემატა",
    productAddedMessage: "თქვენს კალათაში დაემატა.",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("cyber-language", "en");

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
