# İKÇÜ AI Hackathon Projesi

Bu proje, İzmir Katip Çelebi Üniversitesi'nde düzenlenen yapay zeka hackathonu için hazırlanan web sitesidir.

## Görsel Gereksinimler

Aşağıdaki görselleri `public` klasörüne eklemeniz gerekmektedir:

1. **Takım Üyeleri Görselleri** - Her takım üyesi için bir profil resmi:
   - `team-member-1.png` (400x400px önerilen, kare format)
   - `team-member-2.png` (400x400px önerilen, kare format)
   - `team-member-3.png` (400x400px önerilen, kare format)
   - `team-member-4.png` (400x400px önerilen, kare format)

2. **Proje Görselleri**:
   - `project-image.jpg` (800x600px önerilen, yatay format)
   - `hackathon-hero.jpg` (1200x800px önerilen, yatay format)

Henüz bu görseller eklenmediği için, sitede görsel hataları görebilirsiniz. Uygun görselleri ekledikten sonra site düzgün şekilde görüntülenecektir.

## Takım Bilgilerini Güncelleme

`src/app/biz-kimiz/page.tsx` dosyasında, takım üyelerinin bilgilerini gerçek bilgilerle değiştirin:

```tsx
const teamMembers = [
  {
    name: "Takım Üyesi 1", // Gerçek isim
    role: "Yapay Zeka Mühendisi", // Gerçek rol
    description: "Derin öğrenme ve makine öğrenmesi konusunda uzmanlık.", // Kısa biyografi
    image: "/team-member-1.png",
  },
  // Diğer takım üyeleri...
];
```

## Proje Bilgilerini Güncelleme

`src/app/projemiz/page.tsx` dosyasında, proje hakkındaki bilgileri gerçek proje bilgileriyle değiştirin.

---

Bu site, Next.js, Tailwind CSS ve Framer Motion teknolojileri kullanılarak geliştirilmiştir. 