export default () => {
  type Vector2d = {
    x: number;
    y: number;
  };

  type Vector3d = Vector2d & {
    z: number;
  };

  const position: Vector3d = {
    x: 1,
    y: 2,
    z: 3,
  };
  console.log(position);
  //          ^?

  interface Character extends Vector3d {
    speed: number;
  }

  const player: Character = {
    x: 10,
    y: 20,
    z: 30,
    speed: 100,
  };
  console.log(player);
  //          ^?
};
