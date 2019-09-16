import * as React from 'react';

interface IImage {
  url: string;
  id: string;
  breeds: Array<{
    name: string;
  }>;
}

interface IProps {
  data: IImage[];
}

export default class ImagesList extends React.Component<IProps> {

  public render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((x: any) => (
          <li key={x.id}>
            <img src={x.url} alt={x.id} />
            <span>{x.breeds && !!x.breeds.length && x.breeds[0].name}</span>
          </li>
        ))}
      </ul>
    );
  }
}
