"""removed

Revision ID: 619a9ab813df
Revises: 41c6fce1af32
Create Date: 2023-12-13 10:36:15.270538

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '619a9ab813df'
down_revision = '41c6fce1af32'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('roles_created_by_fkey', 'roles', type_='foreignkey')
    op.drop_constraint('roles_modified_by_fkey', 'roles', type_='foreignkey')
    op.drop_column('roles', 'created_by')
    op.drop_column('roles', 'modified_by')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('roles', sa.Column('modified_by', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('roles', sa.Column('created_by', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('roles_modified_by_fkey', 'roles', 'users', ['modified_by'], ['id'])
    op.create_foreign_key('roles_created_by_fkey', 'roles', 'users', ['created_by'], ['id'])
    # ### end Alembic commands ###
