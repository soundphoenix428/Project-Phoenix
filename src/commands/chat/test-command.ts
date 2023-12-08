import {
    ApplicationCommandType,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord-api-types/v10';
import { CommandInteraction, PermissionString } from 'discord.js';

import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

export class TestCommand implements Command {
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.test', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.test'),
        description: Lang.getRef('commandDescs.test', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    };
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionString[] = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        await InteractionUtils.send(intr, Lang.getEmbed('displayEmbeds.test', data.lang));
    }
}
