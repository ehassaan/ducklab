import type { IEntity } from '@/core/language/IEntity';
import type { ISqlConfig } from './ISqlConfig';


export function prepareTable(tbl: IEntity, cfg: ISqlConfig): string {
  const items = [];
  if (tbl.namespace && tbl.namespace.length > 0) {
    for (const p of tbl.namespace) items.push(cfg.quote(p));
  }
  items.push(cfg.quote(tbl.name));
  let selector = cfg.combine(items);
  if (tbl.alias) {
    selector += ` ${cfg.AS} ${tbl.alias}`;
  }
  return selector;
}
