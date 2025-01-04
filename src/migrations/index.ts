import * as migration_20250103_190526_initial from './20250103_190526_initial';
import * as migration_20250103_211942_posts from './20250103_211942_posts';

export const migrations = [
  {
    up: migration_20250103_190526_initial.up,
    down: migration_20250103_190526_initial.down,
    name: '20250103_190526_initial',
  },
  {
    up: migration_20250103_211942_posts.up,
    down: migration_20250103_211942_posts.down,
    name: '20250103_211942_posts'
  },
];
