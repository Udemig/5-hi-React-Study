import { Component } from 'react';

class Sayac extends Component {
  // kurucu method
  constructor(props) {
    // miras alma
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor çalıştı');
  }

  // bileşen ekrana ilk geldiği anda çalşır
  componentDidMount() {
    console.log('Component Did Mount Çalıştı');
  }

  //  bileşenin içerisinde herhangi bir state değiştiğinde
  componentDidUpdate() {
    console.log('Component Did Update Çalıştı');
  }

  //   bileşen ekrandan gittiği an
  componentWillUnmount() {
    console.log('Component Will Unmount Çalıştı');
  }

  // butona tıklandığı anda statei günceller
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // arayüzü  ekrana basar
  render() {
    console.log('render çalştı');
    return (
      <div>
        <p>
          Bu butona <span>{this.state.count}</span> kez tıklandı
        </p>
        <button onClick={this.handleClick}>Arttır</button>
      </div>
    );
  }
}

export default Sayac;
