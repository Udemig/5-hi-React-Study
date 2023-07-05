# State Yöentimi

- State: Uygulama içerisindeki bileşenlerin sahip olduğu özellikler ve bilgiler

- Prop Drilling: bileşenlerde yukarıdan aşşağıya prop yöntemiylee veri gönderimi.

- Context API: uygulamdaki statelerin yönetildiği merkezi bir state yönetim aracı

- Redux: uygulamadki bileşenlerin sahip olduğu gerekli statelerin merkezi bir store'da tutulumasını sağlar

# Neden Redux

- Kod tekranını önler
- Performansı arttırır
- Bileşen içersindeki karışıklığı azaltır
- State yönetimi dah kolay ve anlaşılır bir hale gelir

# Bilinmesi Gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve değiştirilibieln merkezi state

2. Action: Store'u güncellemek için reducer'a gönderdiğimiz haber

- - 2 değere sahip bir objedir
- - type: Eylemin görevi neyse onu tanımladığımız string (addTodo | removeTodo)
- - payload: reducera eylemi göderirken yanında eylem ile alakalı veriyi gönderdiğimiz değer

3. Dispatch: Eylemlerin gerçekleştiğini reducera haber vermemizi sağlayan method

4. Reducer: Gönderilen aksiyonları type değerlerine göre analiz edip store'u günceller

5. Subscribe: Redux, uygulama durumunu merkezi bir depoda (store) saklar. Bileşenlerin bu duruma erişmesi gerektiğinde useSelector kancası kullanılır.

- Not: Eğerki projede API kullanılırken state yönetimi olarak Redux kullanılıyorsa. İkisini mutlaka Senkron tutmalıyız.

# Kurulum

- redux react-redux paketleri indirilir
- storeda kullanılacak reducer oluşturulur
- store oluşturulur
- store proje'ye tanıtılır
