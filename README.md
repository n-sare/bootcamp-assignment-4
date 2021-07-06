# Ödev 4

## Özet Açıklama
### React.js ile aşağıdaki gibi basit bir yorum sistemi yapmanız beklenmektedir.
![alt text](/ux.gif)

## Kaynaklar
* Yıldızlı oy componenti için [react-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component) package'ı kullanılacaktır.
* React.js'de input kullanımı konusunu, bu hafta anlatabilmeyi umuyordum ama süremiz yetmedi. Geliştirme sırasında ihtiyaç duyulacak kaynakları fark edip araştırmak, bulmak ve kullanımını öğrenmek bu mesleğin sonu olmayan bir sürecidir. Önümüzdeki derslerde bu konudan elbette bahsedeceğiz ve form elementlerini kullanacağız. Yine de işleyemediğimiz bu konuyu, gelişiminize faydası olacağını düşündüğüm için ödeve dahil etmek istedim. React ile form input kullanımı için [buradan](https://tr.reactjs.org/docs/forms.html) faydalanabilirsiniz.
* Object veya Array tipindeki field'ları state içerisinde tanımlamak ve güncellemek de yine detaylı bahsedemediğimiz ve zorlanabileceğinizi düşündüğüm bir konu olduğu için aşağıya örnek bir kod ekliyorum. 

### Örnek kod:

```js
    state = {
      comments: [],
      commentValue: "",
      vote: 0
    }

    handleComment = () => {
        const newState = this.state;

        newState.comments.push({ 
            text: this.state.commentValue, 
            vote: this.state.vote 
        });
        newState.commentValue = "";
        newState.vote = 0;

        this.setState({
          ...newState
        });
    }
```
 Burada comment submit aksiyonunu görüyoruz. Tüm state yeni bir object değişkene atanıyor, bu değişken içerisinde istediğimiz değişikliği yapıyoruz ve son durumda bu değiştirilmiş object tüm state içerisine açılıyor. Bu kullanım sayesinde state'i sadece bir kez güncelleyerek re render sayısını azaltmış oluyoruz. 

## Kurallar
* Başlangıçta hiç yorum yoktur ve bu durumda ekrana "Hiç yorum yok" çıktısı verilir.
* Yıldız seviyesi 1-5 arasındadır ve başlangıçta oy durumunu tutan state numerik ve default değeri 0 olmalıdır.
* Yeni bir yorum eklemeden önce yıldız verilmesi zorunludur. Aksi durumda "Yorum yapmadan önce oy vermelisiniz." gibi bir hata mesajı gösterilecektir.
* Yorum alanı boş olamaz ve en az 3 karakter olmalıdır. Yorum inputu boş iken yorum yap butonu tıklanırsa "Boş olamaz" gibi bir hata mesajı gösterilmelidir. Yorum inputundaki karakter sayısı 3 karakterden az ise "Yorumunuz çok kısa" gibi bir hata mesajı verilmelidir.
* İlgili validation'lar sağlandığında yorumları barındıran array tipindeki state içerisine, yeni yorum, object olarak eklenmelidir. 
* Yorumları listelemek için farklı bir component oluşturulmalıdır.
* Yorum ekle kısmındaki rating component, submit button ve text input farklı bir component'in içerisinde olmalıdır.
* State App.js component'inde oluşturulmalı ve güncellenmelidir. Yani tüm aksiyon App.js üzerinden yönetilmelidir. Haliyle diğer component'ler props ile beslenmelidir.
* App.js component'i class tipinde, diğer component'ler function tipinde olmalıdır.
* Style konusunda her zamanki gibi özgürsünüz fakat ödevlerin kontrolünü zorlaştırmamak adına, yukarıda belirttiğim "star rating" haricinde bir package'ı projenize eklememenizi rica ederim.

## Örnek Dosya Yapısı
    .
    ├── ...
    ├── src                     
    │   ├── components                      # Other Components
    │   │   ├── addComment
    │   │   │   ├── addComment.js
    │   │   │   ├── index.js
    │   │   ├── comment
    │   │   │   ├── comment.js
    │   │   │   ├── index.js
    │   │   └── ... 
    │   ├── App.js                          # Parent Component
    │   └── ...                             # etc.
    └── ...
