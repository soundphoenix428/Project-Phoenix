import { InfoOption } from '../../enums/index.js';
import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';
import { PingCommand } from './PingCommand'; // Import the PingCommand

export class InfoCommand implements Command {
    public names = [Lang.getRef('chatCommands.info', Language.Default)];
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            option: intr.options.getString(
                Lang.getRef('arguments.option', Language.Default)
            ) as InfoOption,
        };

        let embed: EmbedBuilder;
        switch (args.option) {
            case InfoOption.ABOUT: {
                embed = Lang.getEmbed('displayEmbeds.about', data.lang);
                break;
            }
            case InfoOption.TRANSLATE: {
                embed = Lang.getEmbed('displayEmbeds.translate', data.lang);
                for (let langCode of Language.Enabled) {
                    embed.addFields([
                        {
                            name: Language.Data[langCode].nativeName,
                            value: Lang.getRef('meta.translators', langCode),
                        },
                    ]);
                }
                break;
            }
            case InfoOption.PING: {
                // Use the PingCommand for the ping functionality
                const pingCommand = new PingCommand();
                await pingCommand.execute(intr, data);
                return;
            }
            default: {
                return;
            }
        }

        await InteractionUtils.send(intr, embed);
    }
}
