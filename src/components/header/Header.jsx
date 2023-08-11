import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";
import { useBooksContext } from "../../context/BooksContext";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log({ [e.target.name]: e.target.value });
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value }); // inputun name atributleriyle ile statede ki key isimleri aynı olmak zorunda.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="search..."
          value={searchInfo.query}
          name="query"
        />

        <SelectBox
          value={searchInfo.query}
          name="selectType"
          onChange={handleChange}
          required
        >
          {printType.map((item) => (
            <option key={item} value={item}></option>
          ))}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
