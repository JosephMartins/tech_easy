import { EntityRepository, Repository } from 'typeorm';

import Tools from '../infra/typeorm/entities/Tools';

@EntityRepository(Tools)
class ToolsRepository extends Repository<Tools> {
  public async findByTitle(title: string): Promise<Tools | null> {
    const findTools = await this.findOne({
      where: { title },
    });

    return findTools || null;
  }
}

export default ToolsRepository;
