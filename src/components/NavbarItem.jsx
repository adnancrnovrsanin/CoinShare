const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
      <p className="text-white text-base">{title}</p>
    </a>
  </li>
);

export default NavbarItem;
