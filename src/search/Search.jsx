import { useState } from 'react';
import { bookApi } from '../bookApi';
import Book from './Book';
import * as S from './searchStyle';

const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  // useEffect(() => {}, [search]);

  const searchBook = () => {
    if (search) {
      bookApi(search)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          alert('err!!');
        });
    }
  };

  return (
    <main>
      <S.Fixed>
        <S.Header>
          <S.SearchBar>
            <input onChange={changeInput} placeholder="책 제목을 입력하세요." />
            <button onClick={searchBook}>검색</button>
          </S.SearchBar>
        </S.Header>
      </S.Fixed>
      <S.BookGrid>
        {data.map((book) => (
          <Book key={book.isbn} bookData={book} />
        ))}
      </S.BookGrid>
    </main>
  );
};

export default Search;
