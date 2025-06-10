import './index.css';
import MemberCard from 'components/MemberCard';
import type { Member } from 'keisoKougaWebData';

type Props = {
  members: Member[];
}

function Members(props: Props) {

  const { members } = props;

  return (
    <div className="member">
      <div className="member-title">
        <p className="member-title-jp">紡ギ人</p>
        <p className="member-title-en">Members</p>
      </div>
      <div className="member-cell">
        {members.map((member) => {
          const { id, name, icon, works, twitter_url, camera } = member;
          return (
            <MemberCard
              key={id}
              name={name}
              icon={icon}
              works={works}
              twitter_url={twitter_url}
              camera={camera}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Members;
