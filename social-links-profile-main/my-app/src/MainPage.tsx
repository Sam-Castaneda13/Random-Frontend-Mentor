import { Button } from './Buttons';
import { ImageProfile } from './ProfileImage';
import { Titles } from './Titles';

export function MainPage() {
  return (
    <div className="box">
      <ImageProfile />
      <Titles />
      <Button />
    </div>
  );
}
