import React from "react";
import styled from "styled-components";

const CommentDate = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8297AB;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const DateString: React.FC<{
  date: string;
}> = ({ date }) => {
  const finalDate = React.useMemo(() => {
    const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' });
    const now = Date.now();
    const parsedDate = new Date(date);
    const parsedTime = parsedDate.getTime();
    if (isNaN(parsedTime)) return '-';

    const differenceMS = now - parsedTime;
    const minuteMS = 1000 * 60;
    const hourMS = minuteMS * 60;
    const dayMS = hourMS * 24;

    if (differenceMS < minuteMS) {
      return rtf.format(0, 'minute');
    } else if (differenceMS < hourMS) {
      return rtf.format(-1 * Math.floor(differenceMS / minuteMS), 'minute');
    } else if (differenceMS < dayMS) {
      return rtf.format(-1 * Math.floor(differenceMS / hourMS), 'hour');
    } else {
      return parsedDate.toLocaleString();
    }
  }, [date]);

  return (
    <CommentDate title={finalDate}>{finalDate}</CommentDate>
  );
};

export default DateString;
