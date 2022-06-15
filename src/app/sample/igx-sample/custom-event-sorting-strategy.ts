import { ISortingStrategy, SortingDirection } from 'igniteui-angular';

export class CustomEventSortingStrategy implements ISortingStrategy {
  public sort(
    names: string[],
    fieldName: string,
    dir: SortingDirection
  ): string[] {
    console.log('Doooooo');
    names.sort((name1, name2) => {
      if (dir === SortingDirection.Asc) {
        return this.sortOrderDependent(name1, name2, -1);
      }
      if (dir === SortingDirection.Desc) {
        return this.sortOrderDependent(name1, name2, 1);
      }
    });
    return names;
  }

  private sortOrderDependent(name1: string, name2: string, direction: number) {
    if (name1 > name2) {
      return -1 * direction;
    }
    if (name1 < name2) {
      return 1 * direction;
    }

    return 0;
  }
}
