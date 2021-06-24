import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, ForeignKey, Table, BelongsTo } from 'sequelize-typescript';
import StockItem from './stockItem.model';
import User from './user.model';

@Table
export default class School extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  type: 'buy' | 'sell';

  @AllowNull(false)
  @Column(DataType.STRING(20))
  status: 'order' | 'confirm' | 'cancel';

  @ForeignKey(() => StockItem)
  @Column
  stockItemId: bigint;

  @ForeignKey(() => User)
  @Column
  userId: bigint;

  @AllowNull(false)
  @Column
  unitPrice: number;

  @AllowNull(false)
  @Column
  count: number;

  @AllowNull(false)
  @Column
  totalPrice: bigint;

  @BelongsTo(() => StockItem)
  stockItem: StockItem;

  @BelongsTo(() => User)
  user: User;
}
