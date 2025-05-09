import React, { useEffect, useMemo, useState } from "react";
import {
  AvatarQuality,
  STTProvider,
  VoiceEmotion,
  StartAvatarRequest,
  VoiceChatTransport,
} from "@heygen/streaming-avatar";

import { AVATARS, STT_LANGUAGE_LIST } from "@/app/lib/constants";

interface AvatarConfigProps {
  onConfigChange: (config: StartAvatarRequest) => void;
  config: StartAvatarRequest;
}

export const AvatarConfig: React.FC<AvatarConfigProps> = ({
  onConfigChange,
  config,
}) => {
  return (
    <></>
  );
};
