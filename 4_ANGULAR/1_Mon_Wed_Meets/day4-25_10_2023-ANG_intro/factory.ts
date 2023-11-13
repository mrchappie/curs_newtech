interface Transport {
  deliver(cargo: string): void;
}

class Truck implements Transport {
  deliver(cargo: string): void {
    console.log('The truck delivered the cargo:', cargo);
  }
}

class Boat implements Transport {
  deliver(cargo: string): void {
    console.log('The boat delivered the cargo:', cargo);
  }
}

class Plane implements Transport {
  deliver(cargo: string): void {
    console.log('The plane delivered the cargo:', cargo);
  }
}

class TransportFactory {
  createTransport(type: string): Transport {
    switch (type) {
      case 'truck':
        return new Truck();
      case 'boat':
        return new Boat();
      case 'plane':
        return new Plane();
      default:
        return new Truck();
    }
  }
}

const factory = new TransportFactory();
factory.createTransport('truck').deliver('milk');
factory.createTransport('boat').deliver('fish');
factory.createTransport('plane').deliver('ammo');
