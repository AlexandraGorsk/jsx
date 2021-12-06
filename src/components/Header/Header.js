import { Head } from "./Header.styles";

const Header = () => {
  return (
    <Head>
      <h1 className="title">Todo list</h1>
      <p>Количество заданий 10</p>
    </Head>
  );
};

export default Header;
