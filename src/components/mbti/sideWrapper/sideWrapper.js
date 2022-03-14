import React from 'react';
import * as S from './styles';
import { SearchList } from '../../../constance/mbti';

const SideWrapper = () => {
    return(
        <S.SideWrapper>
          <div className="imgWrapper">
            <span className="img">img</span>
          </div>
          <S.ListWrapper>
            {SearchList.map((value, page) => {
              return (
                <S.List key={page}>
                  <span className="title">{value.mbti} 게시판</span>
                </S.List>
              );
            })}
          </S.ListWrapper>
        </S.SideWrapper>
    )
}

export default SideWrapper;