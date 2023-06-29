import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

import user from '../json/user.json';
import statistics from '../json/statistics.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList />

      <TransactionHistory transactions={transactions} />
    </main>
  );
};
