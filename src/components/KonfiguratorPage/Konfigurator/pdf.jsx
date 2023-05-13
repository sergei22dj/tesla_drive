import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import Gilroy from "./Gilroy-Medium.ttf";

const Quixote = ({ data }) => {
  const seats =
    data.seats === "fife"
      ? "5"
      : data.seats === "six"
      ? "6"
      : data.seats === "seven"
      ? "7"
      : false;

  const autopilot =
    data.autopilot === "base"
      ? "Базовий"
      : data.autopilot === "enchanced"
      ? "Покращенний"
      : data.autopilot === "full"
      ? "Повний"
      : false;

  const interior =
    data.interior === "white"
      ? "Чорно - білий"
      : data.interior === "black"
      ? "Чорний"
      : data.interior === "cream"
      ? "Кремовий"
      : false;
  return (
    <Document>
      <Page style={styles.body}>
        <Image
          src="https://i.ibb.co/BTmSHGB/Frame-1-1.jpg"
          style={styles.image}
        />
        <Text style={styles.title}>Ваша конфігурація Tesla</Text>
        <Text style={styles.subtitle}>
          Це конфігурація моделі Tesla зроблена на сайті tesla-drive.com
        </Text>
        <Text style={styles.text}>Модель: Tesla {data.model}</Text>
        <Text style={styles.text}>Комплектація: {data.motor}</Text>
        <Text style={styles.text}>Колір: {data.color}</Text>
        <Text style={styles.text}>Колеса: {data.wheels}</Text>

        <Text style={styles.text}>Інтр'єр: {interior}</Text>
        {seats && <Text style={styles.text}>Seating Layout: {seats}</Text>}
        <Text style={styles.text}>Авітопілот: {autopilot}</Text>
        <Text style={styles.subtitle}>Зв'яжіться з нами</Text>
        <Text style={styles.text}>
          м. Київ, вул. Протасів Яр 13. т. +38 068 977 88 88
        </Text>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Gilroy",
  src: Gilroy,
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gilroy",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Gilroy",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Gilroy",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
export default Quixote;
